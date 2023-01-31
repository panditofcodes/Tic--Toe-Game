let audio = new Audio('music.mp3');
let audio_turn = new Audio('ting.mp3');
let gameover =new Audio('gameover.mp3');
let turn = 'X';

// Function to change Turn
const changeturn = ()=>{
    return turn === "X"? "0": "X"
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',(e)=>{
    if (boxtext.innerText=== '') {
        boxtext.innerText = turn;
        turn = changeturn();
        audio_turn.play();
        checkWin();
    }
    if (!isgameover){
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    }}); 
})
// Winning Logic
const checkWin = ()=>{

}