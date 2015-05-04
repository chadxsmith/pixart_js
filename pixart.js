var inputs = [];
var color;


//Change color of box (Function)
function changeBoxColor() {
  event.preventDefault();
  color = document.getElementById("color-field").value;
  document.querySelector(".brush").style.backgroundColor = color;
}

//Change color of box (Click)
document.getElementById("set-color").addEventListener("click", changeBoxColor);


//Creates smallbox, give style, and append to bottom of page (Function )
function smallBoxCreator() {
  for (i = 0; i < 8000; i++){
    var box = document.createElement('div');
    box.className = "square"
    document.body.appendChild(box);
  }
}

//Creates smallbox and append to bottom of page (Event Listener )
window.onload = smallBoxCreator;



//Color smallboxes(Function)
function smallBoxColor() {
  this.style.backgroundColor = color;
}


//Color smallboxes(Event Listener)
  var square = document.querySelectorAll("square");

  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", smallBoxColor)
  }



//
// for (i = 0; i < 8000; i++) {
//   var box = document.createElement('div');
//   box.className = "square";
//   document.body.appendChild(box);
//   box.addEventListener("mouseover", function(){
//     this.style.backgroundColor = color;
//   })
//
// }
