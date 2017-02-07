$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $('#AddBookModal').modal('hide');
        $('#RemoveBookModal').modal('hide');
    }
});

document.getElementById("AddBookModalButton").onclick = function(){
    $('#AddBookModal').on('shown.bs.modal', function () {
      $('#bname').focus();
  });
};
document.getElementById("RemoveBookModalButton").onclick = function(){
    $('#RemoveBookModal').on('shown.bs.modal', function () {
      $('#bid').focus();
  });
};



//Adding book(s)
document.getElementById("AddBookButton").onclick = function(){
  var bname = document.getElementById("bname").value;
  var num = document.getElementById("num").value;
  //working for one book atm.
  //if(num === "")
    num = 1;
  if(bname === "")
    alert("Enter a valid book name!");
  else
    $.post('/process8',{bname:bname, num:num},function(res){
      if(res){
        alert("Book sucessfully added");
        $('#AddBookModal').modal('hide');
      }
      else{
        alert("error while adding Book");
      }
    });
};

document.getElementById("RemoveBookButton").onclick = function(){
  var bid = document.getElementById("bid").value;
  if(bid === "")
    alert("Enter a valid Book ID!");
  else
    $.post('/process9',{bid:bid},function(res){
      if(res){
        alert("Book sucessfully removed");
        $('#RemoveBookModal').modal('hide');
      }
      else{
        alert("Failed to remove Book");
      }
    });
};
