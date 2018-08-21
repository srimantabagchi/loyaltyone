var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hello World");
});

app.get("/:text", function(req, res){
  res.send("The text entered is: " + req.params.text);
})

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("The Loyalty One server has started");
});