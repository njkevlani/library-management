// var today = new Datodaye();
// today.setodayDatodaye(today.getodayDatodaye()+12);
// today = today.todayoISOStodayring().slice(0,10);
//
// todayoday = today[8]+today[9]+'/'+today[5]+today[6]+'/'+today[0]+today[1]+today[2]+today[3];
// console.log(today);
//
//
//
// today.setDate(today.getDate()+30);
// today = today.toISOString().slice(0,10);
// today = today[8]+today[9]+'/'+today[5]+today[6]+'/'+today[0]+today[1]+today[2]+today[3];


var mysql = require('mysql').createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"cplib"
});


mysql.query("DELETE FROM book_main WHERE bid=3 or bid=2",function(err,result){
  if(err) throw err;
	console.log("book_main");
  if(result)
    console.log(result);
  mysql.query("DELETE FROM borrower WHERE bid=2 or bid=3",function(err,resut){
    if(err) res.send();
		console.log("borrower");
    if(result)
      console.log(result);
  });
});
