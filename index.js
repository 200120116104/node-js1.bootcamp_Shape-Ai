const express = require("express");
const bodyParser= require("body-paeser");
const app =express();
const port=8080;

app.use(body-Parser.urlencoded({extended:true} ) );

aapp.get("/",function(req,res) {
 res.sendfile(__dirname+"/index.html") ;
});

app.post("/",function(req,res) {
  var age = Number (req.body.n1)/15;
  res.send("Your age in dog years is:"+age+"dog years");
});

app.listen(port);



