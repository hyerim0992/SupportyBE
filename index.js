"use strict";

const express = require("express"),
  app = express(),
  router = express.Router(),

  methodOverride = require("method-override");

const { testDatabaseConnection } = require('./utils/database');
testDatabaseConnection();

app.set("port", process.env.PORT || 81);
app.use("/",router)

const drugscontroller = require("./controllers/drugscontroller");

router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

router.use(
  express.urlencoded({
    extended: false
  })
);
router.use(express.json());
  
app.set("port", process.env.PORT || 80);
app.use("/drugs", drugsRouter);
connection.connect();

// 목표
const errorHandler = require('./middlewares/errorMiddleware');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const goalRoute = require('./routes/goalRoute');
app.use('/goal', goalRoute);

//app.use(errorHandler);

module.exports = router;


app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});