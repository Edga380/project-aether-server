const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs");
const { getTemplateData } = require("./database/getTemplateData");
const { generateTemplate } = require("./src/controllers/websiteController");
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
    const requestedFile =
      req.path === "/"
        ? "index.html"
        : req.path.endsWith("css") || req.path.endsWith("js")
        ? req.path
        : `${req.path}.html`;

    const filePath = path.join(userWebsitePath, requestedFile);
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath, (error) => {
        if (error) {
          console.error(
            `Error serving user website for subdomain ${subdomain}`,
            error
          );
          next(createError(404));
        }
      });
    } else {
      return;
    }
  }

  // Template website
  const templateData = await getTemplateData(subdomain);

  if (!templateData) {
    next(createError(404));
    return;
  }

  const generatedTemplate = generateTemplate(
    templateData.content,
    templateData.colorPalette,
    req.path
  );

  if (generatedTemplate) {
    return res.send(generatedTemplate);
  }

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
