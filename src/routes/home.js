const { Router } = require("express");

const router = Router();

router.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

router.get("/", (req, res) => {
  res.render('index', req.query);
});

module.exports = router;
