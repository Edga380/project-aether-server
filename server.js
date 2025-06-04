const app = require("./app");
const debug = require("debug")("your-app:server");
const http = require("http");

// Get the port from environment or default to 4000
const port = process.env.PORT || 4000;
app.set("port", port);

// Create HTTP server
const server = http.createServer(app);

// Listen on the provided port, on all network interfaces
server.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
