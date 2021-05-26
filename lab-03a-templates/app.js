const express = require('express');
const hbs = require("hbs");

let app = express();

// set up view engine
app.set("view engine","hbs")
app.set("view",_dirname_ + "/views")

// set up static files
app.use(express.static("public"))


// ROUTES
app.get("/",function(req,res){
    res.render("index.hbs")
})

app.get("/about-us",function(req,res){
    res.render("about-us.hbs")
})

app.get("/multiply/:left/:right",function(req,res){
    let left = parseInt(req.params.left)
    let right = parseInt(req.params.right)
    let multiply = left * right
    res.render("results.hbs", {
        "left": left,
        "right": right,
        "result": multiply
    })
})

app.get("/gallery", function(req,res){
    res.render("image.hbs")
})

// this is so that we can test
module.exports = app;