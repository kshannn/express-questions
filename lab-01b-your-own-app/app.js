const express = require("express");

let app = express();

app.get("/", (req,res)=> {
    res.send("She sells seashells by the seashore");
})

app.get("/date", (req, res)=>{
    let d = new Date();
    let dateString = d + "";
    res.send(dateString)
} )

// app.listen(3000, function(){
//     console.log("Server started")
// })

module.exports = app;