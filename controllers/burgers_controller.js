var express = require("express");
var router = express.Router();
var model = require("../models/burger.js");
var path = require("path");

router.get("/", function(req, res) {
	model.selectAll(function(data) {
		var burgersObject = {
			burgers: data
		};
		res.render("index", burgersObject);
	});
});

router.post("/", function(req, res) {
	model.insertOne(["burger_name", "devoured"], [req.body.burgerName, req.body.devoured], function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	model.updateOne(req.body.devoured, req.params.id, function() {
		res.redirect("/");
	});
});

router.delete("/:id", function(req, res) {
	model.deleteOne(req.params.id, function() {
		res.redirect("/");
	});
});

router.get("/test", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/test.html"));
});

module.exports = router;