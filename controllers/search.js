

var express = require('express'); 
var app = express(); 
var bodyParser = require("body-parser");
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false })); 
var connection = require('../config');
module.exports.search1=function(req,res){
    var source=req.body.sourcename;
    var dest=req.body.Destname;
    var date1=req.body.date3;
    //var time=req.body.time;
   
   
    connection.query('SELECT * FROM flights WHERE source= ? AND destination=? AND date =?',[source,dest,date1], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some e query'
            })
      }else{
       
        if(results.length >0){
            //var result1=s.substr(0, s.length - 1);
            //var d=result1.substr(1)
            //console.log(d)
            res.render("show",{Results:results})
          }
          else{

            res.json({message:'no data'})
          }
        }
          
        
      });
}