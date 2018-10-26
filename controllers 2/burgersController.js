var express = require('express');

var router = express.Router();

var burgerJS = require('../models/burger.js');

router.get("/index", function(req, res) {
	burgerJS.selectAll(function(data) {
	    var burgerObject = {
	      burgers: data
	    };
	    console.log(burgerObject);
	    res.render("index", burgerObject);
	});
});

router.post("/api/burger", function(req, res) {
  burgerJS.insertOne([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});



router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgerJS.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;



