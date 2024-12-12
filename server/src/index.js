const express = require("express");
var cors = require("cors");
const db = require("./config/db");
const route = require("./routes");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const cookieParser = require("cookie-parser");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Config for static files such as images,
app.use(express.static(path.join(__dirname, "public")));

// Using cors to receive requests from clients (CORS Policy)
app.use(cors({ origin: process.env.CORS.split(","), credentials: true }));

// Using middleware to receive data from client by form-data or json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Using parser for getting cookie from clients
app.use(cookieParser());

// Connect to db (mongodb)
db.connect();

// Default route
app.get("/", (req, res) => {
  res.send("Server is running, here!!");
});

// Routing for each request of client
route(app);

server.listen(PORT, () => {
  console.log(`Server is on http://localhost:${PORT}`);
});
