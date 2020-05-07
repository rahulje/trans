

var express = require('express'); 
var app = express(); 
var bodyParser = require("body-parser");
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false })); 
var connection = require('../config');
module.exports.History=function(req,res){
    var email=req.body.email1;
    //var time=req.body.time;
    console.log(email)
   
    connection.query('SELECT * FROM heroku_93535a107431c7d.history WHERE username=?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error in the  query'
            })
      }else{
       
        if(results.length >0){
            //var result1=s.substr(0, s.length - 1);
            //var d=result1.substr(1)
            //console.log(d)
            res.render("show history",{Results:results})
          }
          else{

            res.json({message:'n data'})
          }
        }
          
        
      });
}