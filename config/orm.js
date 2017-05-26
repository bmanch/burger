var connection = require("./connection.js");

function valsQMs(num) {
	var qArr = [];

	for (var i = 0; i < num; i++) {
		qArr.push("?");
	}

	return qArr.toString();
}

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + valsQMs(vals.length) + ")";
		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, boolean, id, cb) {
		var queryString = "UPDATE " + table + " SET devoured = ? WHERE id = ?";
		connection.query(queryString, [boolean, id], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	deleteOne: function(table, id, cb) {
		var queryString = "DELETE FROM " + table + " WHERE id = ?";
		connection.query(queryString, [id], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;