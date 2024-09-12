const { Router } = require("express");

const router = Router();

router.get("/profile", (req, res) => {
  res.send("Profile page");
});

router.get("/username", (req, res) => {
  res.send("username page");
});

module.exports = router;
