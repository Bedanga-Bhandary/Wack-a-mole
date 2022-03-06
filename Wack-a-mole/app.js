const squares = document.querySelectorAll('.square')
const mole =document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score = document.querySelector('#score')

let result=0
let hitPosition=0
let currentTime=60

function randomSquare(){
    squares.forEach(squareinGame=>{
        squareinGame.classList.remove('mole')
    })
    let moleposition=squares[Math.floor(Math.random()*9)]
    // console.log(moleposition)
    moleposition.classList.add('mole')
    hitPosition= moleposition.id
}

    squares.forEach(squareinGame =>{
        squareinGame.addEventListener('mousedown',() => {
            if(squareinGame.id == hitPosition){
                result++
                score.textContent =result
                hitPosition=null
            }
        })
    })

function moveMole(){
    let timerId=null
    timerId = setInterval(randomSquare,550)
}
randomSquare()
moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent =currentTime

    if(currentTime ==0)
    {
        clearInterval(countDownTimerId)
        alert('Game Over! Your Final Score is'+result)
    }

}
let countDownTimerId = setInterval(countDown,1000)
