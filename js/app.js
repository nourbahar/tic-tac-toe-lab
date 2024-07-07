/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = ['','','','','','','','','']
let turn = 'X'
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1 ,4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],

  
  ]

//console.log(squareEls)
//console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    //console.log("check check")
   render()
}


function render(){
    updateBoard()
    updateMessage()
}


    const updateBoard = ()=> {
        board.forEach((element,i) =>{
         squareEls[i].innerText=board[i];})}


const updateMessage = () => {
if(!winner && !tie){ 
    messageEl.textContent = `Player ${turn} turn`

}
   
else if (!winner && tie){
    messageEl.textContent = 'its a tie'

}

else {
messageEl.textContent = `The winner is ${winner}`
}
}


function handleClick(index) {
    const squareIndex = index;
    if(board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner ){
return;
    } else 
placePiece(index)
checkForWinner()
checkForTie()
switchPlayerTurn()
render()
}

function placePiece(index){
    board[index]=turn;
}

function checkForWinner(){
    winningCombos.forEach(combo => {
      if (board[combo[0]]!==''&& board[combo[0]]===board[combo[1]]&& board[combo[0]]===board[combo[2]])
  winner= board[combo[1]]
      } )
  }

  function checkForTie(){
if(winner){return;}

let tie = true
for(i=0 ; i<board.length;i++){
    if(board[i]==''){
        tie=false
        break;
    }
}
  }

  function switchPlayerTurn() {
    if (winner) {return;}

   else if (turn === 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square, index) => {
    square.addEventListener('click',()=> handleClick(index));
 });



