const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const { getTemplateData } = require("./database/getTemplateData");

const app = express();

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/create-website", require("./src/routes/api/createWebsite"));

// Middleware to extract subdomain
app.use((req, res, next) => {
  const host = req.headers.host;
  const subdomain = host.split(".")[0];

  req.subdomain = subdomain;
  next();
});

// Middleware to serve user-specific websites
app.use(async (req, res, next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }

  const subdomain = req.subdomain;

  if (!subdomain || subdomain === "www") {
    return next();
  }

  // User website
  const userWebsitePath = path.join(__dirname, "userWebsites", subdomain);

  if (fs.existsSync(userWebsitePath)) {
    console.log("userWebsitePath");

    const requestedFile =
      req.path === "/"
        ? "index.html"
        : req.path.endsWith("css") || req.path.endsWith("js")
        ? req.path
        : `${req.path}.html`;
    const filePath = path.join(userWebsitePath, requestedFile);

    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath, (err) => {
        if (err) {
          console.error(
            `Error serving user website for subdomain ${subdomain}`,
            err
          );
          next(createError(404));
        }
      });
    }
  }

  // Template website

  // 1. Check database for template data
  const templateData = await getTemplateData(subdomain);

  console.log(templateData);
  console.log("templateData");
  // 2. Generate html structure
  // 3. Send back html data

  // If website do not exist
  next(createError(404));
});

// Static file serving for public and general user websites
app.use(express.static(path.join(__dirname, "public")));
app.use("/userWebsites", express.static(path.join(__dirname, "userWebsites")));
app.use(
  "/websiteTemplates",
  express.static(path.join(__dirname, "websiteTemplates"))
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (res.status(404)) {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
    return;
  }
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = app;
