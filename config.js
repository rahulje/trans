var mysql= require('mysql');
var connection = mysql.createConnection({
    server: "localhost",
    user: 'user@localhost ',
    password: "",
    database:'test'
    
    
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;

