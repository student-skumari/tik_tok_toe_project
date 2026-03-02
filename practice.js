let box=document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");



let turn0=true;//playes x and player o
const winPattern = [
[0, 1,  2] ,
[0, 3, 6],
[0, 4, 8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enablebox();
    msgcontainer.classList.add("hide");
};

box.forEach((boxese)=>{
boxese.addEventListener("click",()=>{
if(turn0){
boxese.innerText="0";
turn0=false;
}
else{
    boxese.innerText="X";
    turn0=true;
}
boxese.dissable=true;
checkWinner();

});
});
const disablebox=()=>{
    for(let boxese of box){
boxese.dissable=true;
    }
}


const enablebox=()=>{
    for(let boxese of box){
boxese.dissable=false;
boxese.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    // disablebox();
};

const checkWinner=()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        let pos1Val=  box[pattern[0]].innerText;
          let pos2Val= box[pattern[1]].innerText;
         let pos3Val=   box[pattern[2]].innerText;

        // );
        if(pos1Val !==""&& pos2Val !==""&&pos3Val !==""){
if(pos1Val===pos2Val&&pos2Val===pos3Val){
    console.log("winner",pos1Val);
showWinner(pos1Val);
        }

    }
}
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
