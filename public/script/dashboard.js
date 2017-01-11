dbload = function(){
  var ID = document.getElementById('message').value;
  if(message != ""){
    $.post('/process3',{id:ID},function(rows){

      var i;
      for(i=0;i<rows.length;i++){
        document.getElementById("renew_btn"+i).classList.remove("hidden");
        document.getElementById("bid"+i).classList.remove("hidden");
        document.getElementById("bname"+i).classList.remove("hidden");
        document.getElementById("return_btn"+i).classList.remove("hidden");

        document.getElementById("renew_btn"+i).innerHTML = '<span class="glyphicon glyphicon-refresh"></span>';
        document.getElementById("bid"+i).innerHTML = rows[i].bid;
        document.getElementById("bname"+i).innerHTML = rows[i].bname;
        document.getElementById("return_btn"+i).innerHTML = '<span class="glyphicon glyphicon-arrow-left"></span>'+rows[i].renewed_date;


        document.getElementById("bid_in"+i).classList.add("hidden");
        document.getElementById("issue_btn"+i).classList.add("hidden");
      }
      for(;i<4;i++){
        document.getElementById("bid"+i).classList.add("hidden");
        document.getElementById("bname"+i).classList.add("hidden");
        document.getElementById("renew_btn"+i).classList.add("hidden");
        document.getElementById("return_btn"+i).classList.add("hidden");

        document.getElementById("bid_in"+i).classList.remove("hidden");
        document.getElementById("issue_btn"+i).classList.remove("hidden");

        document.getElementById("issue_btn"+i).innerHTML = '<span class="glyphicon glyphicon-import"></span>';
      }

      //console.log(rows[0]);
    });
  }
}
//renew     <span class="glyphicon glyphicon-refresh"></span>
//return    <span class="glyphicon glyphicon-arrow-left"></span>6/7/16
//issue     <span class="glyphicon glyphicon-import"></span>

function return_book(i){
    $.post('/process4',{bid:document.getElementById("bid"+i).innerHTML},function(res){
      if(res){
        dbload();
        alert('Operation sucessed');
      }
    })
}

function issue(i){
  $.post('/process5',{bid:document.getElementById("bid_in"+i).value, sid:document.getElementById('message').value},function(res){
    if(res){
      dbload();
      alert('Operation sucessed');
    }
  })
}


function renew(i){
  $.post('/process6',{bid:document.getElementById("bid_in"+i).value},function(res){
    if(res){
      dbload();
      alert('Operation sucessed');
    }
  })
}
