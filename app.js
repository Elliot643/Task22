const express = require("express");
var app = express();
app.use(express.static(__dirname+"/public"));

var path = require("path");

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname+"/public/hello.html"));
});

var pets = require("./public/js/petFunction.js");
app.get("/data", (req, res) => {
	res.json(pets);
});
app.get("/info", (req, res) => {
	res.sendFile(path.join(__dirname+"/public/info.html"));
});

app.get("/pictures", (req, res) => {
	res.sendFile(path.join(__dirname+"/public/picture.html"));
});

app.listen(process.env.PORT || 8080);