var mysql= require('mysql');
var connection = mysql.createConnection({
    server: '192.168.1.103',
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

