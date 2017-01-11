var express = require('express');
var session = require('express-session');
var bodyParese = require('body-parser');
var handlebars = require('express-handlebars').create({
    defaultLayout: "main"
});

var mysql = require('mysql').createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"cplib"
});


var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.use(bodyParese.urlencoded({
    extended: true
}));
app.use(session({
    secret: "TEST",
    saveUninitialized: true,
    resave: true
}));

//getting data of all books
var allBooks;
mysql.query('SELECT DISTINCT bname, count(bname) as total, sum(available) as available FROM book_main GROUP BY bname', function(err, rows, fields){
  if(err) throw err;
  allBooks = rows;
});

//get requests

app.get('/', function(req, res) {
		console.log('GET request recived for /');
    if(req.session.sid){
			console.log('test Session: ' + req.session.sid);
      mysql.query('SELECT borrower.bid, borrower.issue_date, borrower.renewed_date, book_main.bname FROM borrower INNER JOIN book_main WHERE borrower.id="'+req.session.sid+'" AND borrower.bid=book_main.bid', function(err, rows, fields){
        if(err) throw err;
        res.render('mypage',{sid:req.session.sid, books: rows, inbtnstyle:'none;', outbtnstyle:''});
      });
		}
		else{
			res.render('mypage',{outbtnstyle:'none;',inbtnstyle:''});
		}
});

app.get('/login',function(req,res){
	console.log('GET request recived for /login');
	if(req.session.sid){
		res.redirect('/');
	}
	else{
		res.render('login');
	}
})

app.get('/allbooks',function(req,res){
  console.log('GET request recives for /allbooks');
  res.render('allbooks',{all_books: allBooks});
})

//administrator login remaining
app.get('/administrator',function(req,res){
  console.log('GET request for /administrator');
  res.render('dashboard',{layout:'library'});
});

//post requests
//login
app.post('/process',function(req,res){
		console.log('POST request recived from /login');
		var sid = req.body.id;
		var pass = req.body.password;
		var flag = false, user_flag = false;
		mysql.query('SELECT * FROM student_login',function(err,rows,fields){
					if(err) throw err;
					var i;
					for(i=0;i<rows.length && !flag;i++){
						if(rows[i].id == sid){
              user_flag = true;
							if(rows[i].password == pass){
								flag = true;
							}
						}
					}
					if(flag){
						req.session.sid = sid;
						res.redirect('/');
					}
					else if(!flag){
						res.render('login',{error:"Wrong ID-Password",sid:sid,user_error:(!user_flag)});
					}
		});
});

//logout
app.post('/process2',function(req,res){
		console.log('POST request recived from /logout');
		if(req.session.sid){
			console.log(req.session.sid);
			req.session.destroy(function(err){
				console.log('Destroing session');
				if(err) console.log(err);
			});
			res.redirect('/');
		}
});

//ajax post request

app.post('/process3',function(req,res){
		console.log('POST request recived from /administrator');
    mysql.query('SELECT * FROM borrower WHERE id="'+req.body.id+'";',function(err,rows,fields){
      if(err) throw err;
      res.send(rows);
    });

});


app.listen(3000,function(){
  console.log('Server started on localhost:3000');
});
