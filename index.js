"use strict";

const express = require("express"),
  app = express(),
  router = express.Router(),

  methodOverride = require("method-override");

app.set("port", process.env.PORT || 80);
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

app.get("/", (req,res)=> {
  res.send("복용약 page home");
});
router.get("/drugs",drugscontroller.showTodayDrugList);
router.get("/drugs/entire", drugscontroller.showEntireDrugList);
router.get("/drugs/record",drugscontroller.showTodayDrugRecord);
router.get("/drugs/entire/record",drugscontroller.showDrugRecord);
router.get("/drugs/info",drugscontroller.showDrugInfo);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});