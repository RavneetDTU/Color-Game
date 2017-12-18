// Firstly we will make a list of Color......Initially we will make it same for all than we will randomize it
var colors = [
    "rgb(255,0,0)",
    "rgb(0,255,0)",
    "rgb(0,0,255)",
    "rgb(0,255,255)",
    "rgb(255,0,255)",
    "rgb(255,255,0)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var selectedColor = document.getElementById("selectedcolor");
selectedColor.textContent = pickedColor.toUpperCase();

for(i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
}