const king = document.querySelector('.chess_piece')
const squares = document.querySelectorAll('.square')
// console.log(squares);
const gameBoard = document.getElementById('gameBoard')

const infoDisplay = document.getElementById('info')

king.addEventListener('drag',dragging)


squares.forEach((square,_index)=>{
    square.addEventListener('dragover',dragOver)
    square.addEventListener('dragenter',dragEnter)
    square.addEventListener('dragleave',dragLeave)
    square.addEventListener('drop',dragDrop)
    square.addEventListener('dragend',dragEnd)
})

king.addEventListener('dragstart',dragStart)

function dragging() {
    infoDisplay.textContent = "You are dragging " + beingDragged.id
    
}

let beingDragged;
function dragStart(e) {
    beingDragged=(e.target); 
    // console.log(beingDragged);
}
function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.target.classList.add('highlight')
}
function dragLeave(e) {
    e.target.classList.remove('highlight')
}

function dragDrop(e) {
    e.target.append(beingDragged)
    e.target.classList.remove('highlight')
}

function dragEnd(e) {
    e.target.classList.add('target')
   
    setTimeout(() => {
         e.target.classList.remove('target')
          
    }, 100);
    infoDisplay.textContent = ""
}