let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let msgInfo=document.querySelector("#info-msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
   let randomIndex= Math.floor(Math.random()*3);
   return options[randomIndex];
}
const gameDraw=(userChoice,compChoice)=>{
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="navy";
    msgInfo.innerText=`Your Choice = ${userChoice} and Computer Choice = ${compChoice}`;
    msgInfo.style.backgroundColor="navy";
}
const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText="You Win!";
    msg.style.backgroundColor="green";
    msgInfo.innerText=`Your Choice = ${userChoice} and Computer Choice = ${compChoice}`;
    msgInfo.style.backgroundColor="green";
   }
   else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText="You Loose!";
    msg.style.backgroundColor="red";
    msgInfo.innerText=`Your Choice = ${userChoice} and Computer Choice = ${compChoice}`;
    msgInfo.style.backgroundColor="red";
   }
}
const gamePlay=(userChoice)=>{
    //generate comp choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
       gameDraw(userChoice,compChoice);
    }
    else{
        let userWin;
        if(userChoice==="rock"){
            //paper,scissors
           userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="rock"?true:false;
        }
        else if(userChoice==="scissor"){
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        gamePlay(userChoice);
    });
});
