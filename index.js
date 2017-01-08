var express = require('express');

var app = express();


/*app.set('port',process.env.PORT || 3000);

app.get('/nilesh',function(req,res){
	res.send('Express works');
});

app.listen(app.get('port'),function(){
	console.log('Server running on localhost:3000');
});
*/

var handlebars = require('express-handlebars').create({defaultLayout:'student'});
var session = require('express-session');
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'secret'
}));

var sess;
var bodyParser = require('body-parser');
var mysql = require('mysql')
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'cplib'
});

connection.connect();


app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/login',function(req,res){
	res.render('login',{layout:'lib_manage'})
});


app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){

	//if mot logged in remaining
	//sess = req.session;
	//if logged in
	console.log('hello');
	if(req.session.id){
		console.log(req.session.id.toString());	

		res.render('mypage');
		//res.end('done');
		//res.write('Hello '+req.sess.id);
	}
	else{
		res.redirect('/login');
	}
	
});

//app.get('/:status')


app.post('/process',function(req,res){

	var id = req.body.id;
	var pass = req.body.password;

	connection.query('select * from student_login;', function(err, rows, fields) {
		if (err) throw err;
		var i;
		for(i = 0 ; i < rows.length ; i++){
			if(rows[i].id == id){
				if(rows[i].password == pass){
					
					req.session.id = id;
					//console.log('/process: '+sess.id);
					res.redirect('/');//,{"status":true}
					//res.end('done');
					//res.redirect(200,'/');
					break;
				}
				else{
					res.render('login',{error:'Not valid ID or Password.', layout:'lib_manage'});
				}
			}
				
		}
		

	});
});


app.listen(app.get('port'),function(){
	console.log('Server running on localhost:3000');
});