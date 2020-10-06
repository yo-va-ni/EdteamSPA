const { Router } = require("express");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("ET ok");
});

module.exports = router;


