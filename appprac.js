var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var friends=['a','b'];

app.get("/",function(req,res){
res.render("para");
});


app.post("/add",function(req,res){
var name=req.body.name;
friends.push(name);
 res.redirect("/friends");
});



app.get('/friends',function(req,res){
 res.render("formsub",{friends:friends});
});

//app.get('*',function(req,res){
  //  res.send("shutu123p");
// });


app.listen(3000);
console.log("server started");
