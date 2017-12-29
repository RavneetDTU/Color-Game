// Firstly we will make a list of Color......Initially we will make it same for all than we will randomize it
var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colordisplay = document.getElementById("colordisplay")
var messageDisplay = document.querySelector("#message");

colordisplay.textContent = pickedColor;

for(i=0;i<squares.length;i++){
    // Adding Initial Colors to Squares
    squares[i].style.background = colors[i];

    // Adding Click Listner to Squares
    squares[i].addEventListener("click",function () {
       // grab color of Clicked Square
        var clickedColor = this.style.background;

        // Compare Color to picked Color
        if(pickedColor === clickedColor){
            messageDisplay.textContent = "Correct !!";
            changeColor(clickedColor);

        }else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again !!";
        }
    });
}

function changeColor(color) {
    // Loop through all Squares
    for(var i = 0; i<colors.length;i++){
        // change color of Each Square to a Given Color;
        squares[i].style.background = color;
    }

}
