var mysql= require('mysql');
var connection = mysql.createConnection({
    server: "us-cdbr-east-06.cleardb.net",
    user: "b1c37c44ae5b35",
    password: "635aa172",
    database:"heroku_93535a107431c7d"
    
    
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;

