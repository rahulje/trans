

var express = require('express'); 
var app = express(); 
var bodyParser = require("body-parser");
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false })); 
var connection = require('../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM heroku_93535a107431c7d.users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
            if(password==results[0].password){
              res.render("home", { name:results[0].name});
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}