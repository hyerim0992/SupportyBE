"use strict";

const express = require('express');
const router = express.Router();
const drugsController = require("../controllers/drugsController");
const methodOverride = require("method-override");

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


router.get("/", (req, res) => {
    res.send("복용약 page home");
});

router.route("/today")
    .get(drugsController.showTodayDrugList)
    .post()
    .put()
    .delete();

router.route("/entire")

router.get("/today/record", drugsController.showTodayDrugRecord);
router.get("/entire/record", drugsController.showDrugRecord);
router.get("/info", drugsController.showDrugInfo);

module.exports = router;
