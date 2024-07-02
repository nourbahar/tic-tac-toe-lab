/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const board = ['X','O','O','','','','X','O','']
let turn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('message')
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
   //render()
}


function render(){
    updateBoard()
    updateMessage()
}


    const updateBoard = ()=> {
        board.forEach((element,index) =>{
            if (element === "X"){
                squareEls[index].innerText = "X";
            }
            else if (element === "O"){
                squareEls[index].innerText = "O";
            }
           else {
                squareEls[index].innerText = "";
            }
        })
    }


updateBoard()

const updateMessage = () => {
if(!winner && !tie){ 
    messageEl.textContent = ''

}
   
else if (!winner && tie){
    messageEl.textContent = ''
}

else {
messageEl.textContent = ''
}
}


function handleClick(event) {
    
}

/*----------------------------- Event Listeners -----------------------------*/


