var orm = require("../config/orm.js");

var model = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(boolean, id, cb) {
		orm.updateOne("burgers", boolean, id, function(res) {
			cb(res);
		});
	},
	deleteOne: function(id, cb) {
		orm.deleteOne("burgers", id, function(res) {
			cb(res);
		});
	}
}

module.exports = model;