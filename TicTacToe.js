// For Restart button
var restart = document.querySelector('#b');

// For Squares
var squares = document.querySelectorAll("td");

//Making up a funtion to clear board with Restart
function clearBoard(){
    for (var i = 0; i < squares.length;i++){
        squares[i].textContent = '';
    }
}

//Making an event while clicking Restart
restart.addEventListener("click",clearBoard)

//Making a function to alternate between X and O 
function game(){
    if (this.textContent == ""){
        this.textContent = "X";
    }
     else if (this.textContent == "X"){
        this.textContent = "O"
    }
    else {
        this.textContent = ""
    }
}

//Making an event for playing
for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click",game)
}
