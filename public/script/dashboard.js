dbload = function(){
  var ID = document.getElementById('message').value;
  if(message != ""){
    $.post('/process3',{id:ID},function(rows){
      console.log(rows[0]);
    });


  }

}
