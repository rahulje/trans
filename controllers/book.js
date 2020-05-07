

var express = require('express'); 
var app = express(); 
var bodyParser = require("body-parser");
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false })); 
var connection = require('../config');
module.exports.Book=function(req,res){
    var email=req.body.email;
    var flightid=req.body.fid;
    var Seat=req.body.seats;
    console.log(parseInt(flightid))
   
    connection.query('SELECT * FROM heroku_93535a107431c7d.flights WHERE fid = ?',[flightid], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        console.log(results)
        if(results.length >0){
            if(results[0].seats<parseInt(Seat)){
                res.json({
                    status:false,
                    message:"Seats not available"
                   });
            }
            else{
                var s=results[0].seats-Seat;
                connection.query('update heroku_93535a107431c7d.flights set seats=? where fid=?', [s,parseInt(results[0].fid)], (error, results1, fields) => {
                    if (error) {
                        res.json({
                          status:false,
                          message:'there are some e query'
                          })
                    }
                    else{
                    console.log('Rows affected:', results1.affectedRows);
                    connection.query('select * from heroku_93535a107431c7d.users where email=?', [email], (error, results2, fields) => {
                        if (error) {
                            res.json({
                              status:false,
                              message:'there are some e query'
                              })
                        }
                        else{
                            var users={
                                "username":results2[0].email,
                                "source":results[0].source,
                                "destination":results[0].destination,
                                "date":results[0].date,
                                "price":results[0].fare*Seat,
                                "fid":parseInt(results[0].fid)
                        
                            }
                        
                        
                            connection.query('INSERT INTO history SET ?',users, function (error, results5, fields) {
                              if (error) {
                                res.json({
                                    status:false,
                                    message:'there are some error with query'
                                })
                            }

                            
                        })
                        res.render("show ticket",{name:results2[0].name,email:results2[0].email,flightid:results[0].fid,source:results[0].source,destination:results[0].destination,date:results[0].date,time:results[0].time,fare:(results[0].fare*Seat)})
                    
                    }
                })
            
            }
            })
        }
        }else{
                res.json({
                  status:false,
                  message:"Enter correct flight id"
                 });
            }
          
      }
    });
}