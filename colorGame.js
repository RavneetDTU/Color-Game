// Firstly we will make a list of Color......Initially we will make it same for all than we will randomize it
var numberOfSquares = 6;
var colors = generateRandomColor(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickrandomColor();
var h1 = document.querySelector('h1');
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

easybtn.addEventListener('click',function () {
    hardbtn.classList.remove('selected');
    easybtn.classList.add('selected');
    numberOfSquares = 3;
    // Generating 3 new Random Colors
    colors = generateRandomColor(numberOfSquares);
    // Picking a random color
    pickedColor = pickrandomColor();
    colordisplay.textContent = pickedColor;
    // Changing Color of top 3 Elements
    for(var i = 0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else {
            // Don't make 3 Blocks to be Black as thay will be Still Clickable. Just Block them.
            // squares[i].style.background = "#232323";
            squares[i].style.display = "none";
            // But when we click ResetButton, It Creates 6 Colors. And PickedColor can be from there
        }
    }
});

hardbtn.addEventListener('click',function () {
    hardbtn.classList.add('selected');
    easybtn.classList.remove('selected');
    numberOfSquares = 6;
    colors = generateRandomColor(numberOfSquares);
    pickedColor = pickrandomColor();
    colordisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length;i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener('click',function () {
   //Generate New Colors
    colors = generateRandomColor(numberOfSquares);
    // Pick a new random Color from Array
    pickedColor = pickrandomColor();
    // change colordisplay to match picked Color
    colordisplay.textContent = pickedColor;
    //change color of Squares
    for(var i = 0;i<squares.length;i++){
        squares[i].style.background = colors[i];
    }
    // Change Color of H1 Background
    h1.style.background = "#4682B4";

    // Resetting Display Message to Empty
    messageDisplay.textContent = "";

    // We want that Button Should say Play Again? Only if User Wins, Than after it should be New Colors
    this.textContent = "New Colors";
    // We used this key word here because we are inside resetButton Code and wants to Refer this button

});

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
            resetButton.textContent = "Play Again?"
            h1.style.background = pickedColor;

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

}function pickrandomColor() {
    // By Using Math.random() we can pick any random Color but it can returns a long decimal (But always less than 1) So we multiply it with 6
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColor(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0;i<num;i++){
        arr[i] = "rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
        // For good practise make 3 Functions for red,green,blue and than Combine
    }
    // return that array
    return arr;

}

