var inputs = []
var color;


//Change color of box (Function)
function changeBoxColor() {
  event.preventDefault();
  color = document.getElementById("color-field").value;
  document.querySelector(".brush").style.backgroundColor = color;
}

//Change color of box (Click)
document.getElementById("set-color").addEventListener("click", changeBoxColor)


//Change color of smallbox and append to bottom of page (Function )
function smallBoxCreator(current) {
  console.log('running');
  for (i = 0; i < 8000; i++){
    current = document.createElement('div');
    current.className = "square";
    current.style.backgroundColor = color;
    document.body.appendChild(current);
  }
}

//Change color of smallbox (Hoover)
document.querySelector("div").addEventListener("click", smallBoxCreator(this))





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
