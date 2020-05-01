var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false })); 
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var Search=require('./controllers/search')
var Book1=require('./controllers/book')
var history1=require('./controllers/history')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  
 
app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "login.html" );  
})  

app.get('/signup', function (req, res) {  
    res.sendFile( __dirname + "/" + "signup.html" );  
})
app.get('/book', function (req, res) {  
    res.sendFile( __dirname + "/" + "book.html" );  
})
app.get('/history', function (req, res) {  
    res.sendFile( __dirname + "/" + "history.html" );  
})
 
/* route to handle login and registration */

 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.post('/controllers/search', Search.search1);
app.post('/controllers/book', Book1.Book);
app.post('/controllers/history', history1.History);
app.listen(process.env.PORT || 5000);
app.get('/search',function(req,res){
    res.render( "home");
})