//enter username and keep score
//get and post requests to show scores 
//print scores to JSON?


var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var scoreDisplay = document.querySelector("#score");
var submitUsername = document.querySelector(".submit");
var score = 0;

startGame();

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
       if(clickedColor == pickedColor){
           alert('YOU GOT IT RIGHT!   Click the button to play again!');
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           score++;
           scoreDisplay.textContent = score;
           submitUsername();
           startGame();
       } else {
           this.style.backgroundColor = "black";
       }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

function startGame(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
}

// funtion submitUsername(){
    
// };