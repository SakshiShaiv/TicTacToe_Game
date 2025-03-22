let btns=document.querySelectorAll(".btns");
let outer=document.querySelector(".outer");

let win=document.querySelector(".win");
let rg=document.querySelector("#rg");
let ng=document.querySelector("#ng");

let turnO=true;
let winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    if(turnO){
         btn.innerText="O";
         turnO=false;
        
    }else{
        btn.innerText="X";
        turnO=true;
    }btn.disabled=true;
    checkwinner();
});
});
const checkwinner=()=>{
    for(let pattern of winPatterns){
       let pos1=btns[pattern[0]].innerText;
       let pos2=btns[pattern[1]].innerText;
       let pos3=btns[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
                return;
            }
        }

    }
    if (isBoardFull()) {
        showDraw();
    }
};

const isBoardFull = () => {
    return [...btns].every((btn) => btn.disabled);
};


const showDraw = () => {
    win.innerText = "It's a draw! No winners this time.";
    outer.classList.remove("hide");
    disableBoxes();
};


const showwinner=(winner)=>{
   win.innerText=`congratulations! our winner is ${winner}`;
   outer.classList.remove("hide");
   disableBoxes();
}
const reset=()=>{
    turnO=true;
    enableBoxes();
    outer.classList.add("hide");
}
const enableBoxes = () => {
    btns.forEach((btn) => {
        btn.innerText = "";  // Clear text
        btn.disabled = false;  // Enable the button
    });
};
const disableBoxes = () => {
    btns.forEach((btn) => {
          // Clear text
        btn.disabled = true;  // Enable the button
    });
};


rg.addEventListener("click",reset);
ng.addEventListener("click",reset);



