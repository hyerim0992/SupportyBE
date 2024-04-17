"use strict";

const express = require("express"),
  app = express(),
  mysql = require("mysql"),
  drugsRouter = require("./routes/drugsRouter"),
  connection = mysql.createConnection({
    host: "34.22.68.10",
    user: "root",
    password:"sungshin",
    database:"supporty",
    port:"3306",
  });
  
app.set("port", process.env.PORT || 80);
app.use("/drugs", drugsRouter);
connection.connect();


app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});