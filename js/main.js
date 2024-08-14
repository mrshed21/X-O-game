const title = document.getElementById("title");
const scoreX = document.querySelector(".player1 p");
const scoreO = document.querySelector(".player2 p");
let playerstate = "X";
let score = {};
if (localStorage.dataLocal != null){
    score = JSON.parse(localStorage.getItem("dataLocal"))
    scoreX.innerHTML = score.x;
    scoreO.innerHTML = score.o;

}else {
    score = {
        x: 0,
        o: 0,
      };
}

let squares = [];
function clickbox(id) {
  let boxvalue = document.getElementById(id).innerHTML;

  if (playerstate === "X" && boxvalue === "") {
    document.getElementById(id).innerHTML = playerstate;
    document.getElementById(id).style.background = "#a7f0a7";
    title.style.background = "#ff6161"
    title.innerHTML = "O  turn";
    playerstate = "O";
} else if (playerstate === "O" && boxvalue === "") {
    document.getElementById(id).innerHTML = playerstate;
    document.getElementById(id).style.background = "#ff6161";
    title.style.background = "#a7f0a7"
    title.innerHTML = "X  turn";
    playerstate = "X";
  }

 

  checkResult();
}

function checkResult() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`box${i}`).innerHTML;
  }
  if (
    squares[1] === squares[2] &&
    squares[2] === squares[3] &&
    squares[3] != ""
  ) {
    winner(1, 2, 3);
  } else if (
    squares[5] === squares[6] &&
    squares[4] === squares[5] &&
    squares[5] != ""
  ) {
    winner(4, 5, 6);
  } else if (
    squares[7] === squares[8] &&
    squares[8] === squares[9] &&
    squares[9] != ""
  ) {
    winner(7, 8, 9);
  } else if (
    squares[1] === squares[4] &&
    squares[4] === squares[7] &&
    squares[7] != ""
  ) {
    winner(1, 4, 7);
  } else if (
    squares[2] === squares[5] &&
    squares[5] === squares[8] &&
    squares[8] != ""
  ) {
    winner(2, 5, 8);
  } else if (
    squares[3] === squares[6] &&
    squares[6] === squares[9] &&
    squares[9] != ""
  ) {
    winner(3, 6, 9);
  } else if (
    squares[1] === squares[5] &&
    squares[5] === squares[9] &&
    squares[9] != ""
  ) {
    winner(1, 5, 9);
  } else if (
    squares[3] === squares[5] &&
    squares[5] === squares[7] &&
    squares[7] != ""
  ) {
    winner(3, 5, 7);
  } else  if (!squares.includes("")){

    Draw ()


}
}

function winner(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  if (squares[num1] === "X") {
    // document.getElementById(`box${num1}`).style.background = "#a7f0a7";
    //document.getElementById(`box${num2}`).style.background = "#a7f0a7";
    //document.getElementById(`box${num3}`).style.background = "#a7f0a7";
    score.x++;

    scoreX.innerHTML = score.x;
    title.style.background = "#a7f0a7"

  } else if (squares[num1] === "O") {
    // document.getElementById(`box${num1}`).style.background = "#ff6161";
    //document.getElementById(`box${num2}`).style.background = "#ff6161";
    //document.getElementById(`box${num3}`).style.background = "#ff6161";
    score.o++;
    scoreO.innerHTML = score.o;
    title.style.background = "#ff6161"

  }
  localStorage.setItem("dataLocal", JSON.stringify(score))

  setTimeout(function () {
    resetGame();
  }, 2000);
}

function resetGame() {
  playerstate = "X";
  title.innerHTML = "X  turn";
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`box${i}`).innerHTML = "";
    document.getElementById(`box${i}`).style.background = "aliceblue";
  }
  title.style.background = "#f1f1f1"
  
}

function resetScore (){
    score.o=0;
    score.x=0;
    localStorage.setItem("dataLocal", JSON.stringify(score))

    scoreX.innerHTML = score.x;
    scoreO.innerHTML = score.o;


}


function Draw (){
    title.innerHTML = "Drow";
    title.style.background = "#fff";
    setTimeout(function () {
        resetGame();
      }, 2000);
}
