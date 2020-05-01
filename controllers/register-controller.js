var express=require("express");
var connection = require('../config');
 
module.exports.register=function(req,res){
  
    var users={
        "email":req.body.email,
        "name":req.body.name,
        "password":req.body.password,
        "age":req.body.age,
        "mobile":req.body.mobile,
        "gender":req.body.gender,

    }


    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }
      else{
        res.sendfile( 'login.html' )
        }
      })
}

