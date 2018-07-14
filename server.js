const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./backend/routes");
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// SERVE STATIC
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API ROUTES
app.use(routes);



// REACT ROUTE
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// MONGO CONNECT
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brewerApp");

// SERVER START
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
