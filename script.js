const emojiDetails=[
    {
        description:'Heart',
        emoji:'❤️',
    }, 

     {
        description:'Happy Face',
        emoji:'😀',
    },
     {
        description:'In Love',
        emoji:'🥰',
    },
     {
        description:'Cool',
        emoji:'😎',
    },
     {
        description:'Angry',
        emoji:'😡',
    },
     {
        description:'Sleepy',
        emoji:'😴',
    },
     {
        description:'Coldy',
        emoji:'🥶',
    },
     {
        description:'Sick',
        emoji:'🤮',
    },
     {
        description:'Punch',
        emoji:'👊',
    },
     {
        description:'Watermelon',
        emoji:'🍉',
    }
];

//---------------------------//DOM MANUPULATIONS//---------------------//
const result=document.getElementById('result');
const inputBox=document.getElementById('input-box');
const scoreDiv=document.getElementById('score');
const timerDiv=document.getElementById('timer');
const resBtn=document.getElementById('restart');

//-------------//GLOBAL VARIABLES//----------------//
let score=0;
let currentEmojiIndex=0;
let timer;
let seconds=10;

//-----------------------------//EVENT LISTENERS ON BUTTONS//--------------------//
inputBox.addEventListener('keydown',(e)=>{
    // console.log(e);
    if(e.key==='Enter'){
        checkGuess();
    }
})

//------------------------//FUNCTIONS//---------------------//
function setTimer(){
    timer=setInterval(()=>{
        seconds--;
        timerDiv.textContent=`Time Left : ${seconds}s`;
        if(seconds<=0){
            endGame();
        }
    },1000);
}
function endGame(){
    clearInterval(timer);
    inputBox.disabled=true;
    restart.style.display='inline-flex';

}

function displayEmoji(){
    const desc=document.getElementById('description');
    desc.textContent=emojiDetails[currentEmojiIndex].emoji;
    timerDiv.textContent=`Time Left : ${seconds}s`
}
function checkGuess(){
    if(inputBox.value===''){
        return alert('Type guess first.')
    }
    if(emojiDetails[currentEmojiIndex].description.trim().toLowerCase()===inputBox.value.trim().toLowerCase()){
       correctAns();
    }else{
        wrongAns();
    }
    inputBox.value='';
    inputBox.focus();
    nextEmoji();

}
function nextEmoji(){
    currentEmojiIndex++;
    if(currentEmojiIndex===emojiDetails.length){
        currentEmojiIndex=0;
    }
    displayEmoji();

}
function correctAns(){
         result.textContent='Correct';
         result.style.color='green';
    setTimeout(()=>{
         result.textContent='';
        //   result.style.color='green';
    },2000);
   
    score++;
    scoreDiv.textContent=`Score : ${score}`;
}
function wrongAns(){
      result.textContent='Wrong !';
         result.style.color='red';
    setTimeout(()=>{
         result.textContent='';
        //   result.style.color='green';
    },5000);
    scoreDiv.textContent=`Score : ${score}`;
}
document.addEventListener('DOMContentLoaded',()=>{
    displayEmoji();
    setTimer();
})

//---------------------------------//END OF CODE//----------------------------//