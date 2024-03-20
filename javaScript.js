let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetButton');
let newBtn = document.querySelector('#newButton');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnX = true; // player O next turn X

let windPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnX){
            box.innerText ='X' ;
            turnX = false
        }else{
            box.innerText ='O'
            turnX = true ;
        }
        box.disabled =true;
        checkWinner();
    })
});

const disableButton = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableButton = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const restGame =() =>{
    turnX = true;
    enableButton();
    msgContainer.classList.add('hide');
};

const showWinner =(winner)=>{
    msg.innerText =`Congratulations Winner ${winner} ✨⚡️☄️🥳 !!`
    msgContainer.classList.remove('hide'); 
    disableButton();
}

const checkWinner = ()=>{
   for(let pattern of windPatterns){
       pos1Val= boxes[pattern[0]].innerText;
       pos2Val= boxes[pattern[1]].innerText;
       pos3Val= boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val ==pos3Val){
            console.log("congratulations Winner !!",pos1Val)
            showWinner(pos1Val);
        }
       }
   }
};

newBtn.addEventListener('click',restGame);
resetBtn.addEventListener('click',restGame);
