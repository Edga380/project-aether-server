const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");

const app = express();

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Middleware to extract subdomain
app.use((req, res, next) => {
  const host = req.headers.host;
  const subdomain = host.split(".")[0];

  req.subdomain = subdomain;
  next();
});

// Middleware to serve user-specific websites
app.use((req, res, next) => {
  const subdomain = req.subdomain;

  if (!subdomain || subdomain === "www") {
    return next();
  }

  const websiteTemplatePath = path.join(
    __dirname,
    "websiteTemplates",
    subdomain
  );
  const userWebsitePath = path.join(__dirname, "userWebsites", subdomain);

  const requestedFile =
    req.path === "/"
      ? "index.html"
      : req.path.endsWith("css") || req.path.endsWith("js")
      ? req.path
      : `${req.path}.html`;
  const websiteTemplateFilePath = path.join(websiteTemplatePath, requestedFile);
  const filePath = path.join(userWebsitePath, requestedFile);

  if (fs.existsSync(websiteTemplateFilePath)) {
    return res.sendFile(websiteTemplateFilePath, (err) => {
      if (err) {
        console.error(
          `Error serving website template for subdomain ${subdomain}`,
          err
        );
        next(err.status(404));
      }
    });
  }

  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath, (err) => {
      if (err) {
        console.error(
          `Error serving user website for subdomain ${subdomain}`,
          err
        );
        next(err.status(404));
      }
    });
  }

  // If no file is found
  next(err.status(404));
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
