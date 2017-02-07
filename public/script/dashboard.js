$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $('#myModal').modal('toggle');
    }
});

dbload = function(){
  var ID = document.getElementById('message').value;
  if(message !== ""){
    $.post('/process3',{id:ID},function(rows){

      if(!rows)
        alert("Student not registered");

      else{
        var i;
        document.getElementById('modal_title').innerHTML = ID;
        for(i=0;i<rows.length;i++){
          document.getElementById("renew_btn"+i).classList.remove("hidden");
          document.getElementById("bid"+i).classList.remove("hidden");
          document.getElementById("bname"+i).classList.remove("hidden");
          document.getElementById("return_btn"+i).classList.remove("hidden");

          document.getElementById("renew_btn"+i).innerHTML = '<span class="glyphicon glyphicon-refresh"></span>';
          document.getElementById("bid"+i).innerHTML = rows[i].bid;
          document.getElementById("bname"+i).innerHTML = rows[i].bname;

          var t = rows[i].renewed_date.split(/[- :]/);
          var strDate = t[2][0]+t[2][1] + '/' +  t[1] + '/' + t[0];
          //var strDate = "test";//dt.getDate()+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear();
          document.getElementById("return_btn"+i).innerHTML = '<span class="glyphicon glyphicon-arrow-left"></span>'+strDate;

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
        $('#myModal').modal('show');
        //console.log(rows[0]);
      }
    });
  }
};
//renew     <span class="glyphicon glyphicon-refresh"></span>
//return    <span class="glyphicon glyphicon-arrow-left"></span>6/7/16
//issue     <span class="glyphicon glyphicon-import"></span>

function return_book(i){
    $.post('/process4',{bid:document.getElementById("bid"+i).innerHTML},function(res){
      if(res){
        dbload();
        alert('Operation sucessed');
      }
    });
}

function issue(i){
  var bid = document.getElementById("bid_in"+i).value;
  if(bid!=="")
    $.post('/process5',{bid:bid, sid:document.getElementById('message').value},function(res){
      if(res){
        dbload();
        alert('Operation sucessed');
      }
      else{
        alert('Operation failed');
      }
    });
  else
    alert("BID required!");
}


function renew(i){
  $.post('/process6',{bid:document.getElementById("bid"+i).innerHTML},function(res){
    if(res){
      dbload();
      alert('Operation sucessed');
    }
  });
}
