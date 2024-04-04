"use strict";

const express = require("express"),
  app = express(),
  router = express.Router(),

  methodOverride = require("method-override");

app.set("port", process.env.PORT || 3000);

router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

router.use(layouts);
router.use(express.static("public"));

router.use(
  express.urlencoded({
    extended: false
  })
);
router.use(express.json());


app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});