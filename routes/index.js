var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET session-in */
router.get("/session-in", (req, res, next) => {
  // Initialisation de la variable de sessions "maVariable" avec TRUE
  res.send(req.session.song);
  req.session.song = "be bop a lula";
});

/* GET session-out */
router.get("/session-out", (req, res, next) => {
  // Initialisation de la variable de sessions "maVariable" avec FALSE
  res.send(req.session.song);
  req.session.song = "";
});

module.exports = router;
