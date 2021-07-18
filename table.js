let ball = document.querySelector(".ball");
let board = document.querySelector(".table");
let leftPaddle = document.querySelector(".paddleLeft");
let rightPaddle = document.querySelector(".paddleRight");
let boardBoundary = board.getBoundingClientRect();
let x = true;
let y = true;

document.addEventListener("keydown", function(e){
    if(e.key == "w"){
        movePaddle(leftPaddle, -window.innerHeight * 0.1);
    }else if(e.key == "s"){
        movePaddle(leftPaddle, window.innerHeight * 0.1);
    }else if(e.key == "ArrowUp"){
        movePaddle(rightPaddle, -window.innerHeight * 0.1);
    }else if(e.key == "ArrowDown"){
        movePaddle(rightPaddle, -window.innerHeight * 0.1);
    }
});
function movePaddle(currPaddle, change){
    let currPaddleBounds = currPaddle.getBoundingClientRect();
    if(currPaddleBounds.top + change >= boardBoundary.top && currPaddleBounds.bootm + change <= boardBoundary.bottom){
        currPaddle.style.top = currPaddle.top + change + "px";
    }
}
function moveBall(){
    let ballCords = ball.getBoundingClientRect();
    let ballTop = ballCords.top;
    let ballLeft = ballCords.left;
    let ballRight = ballCords.right;
    let ballBottom = ballCords.bottom;

    if(ballTop <= boardBoundary.top || ballBottom >= boardBoundary.bottom){
        y = !y;
    }
    if(ballLeft <= boardBoundary.left || ballRight >= boardBoundary.right){
        x = !x;
    }

    ball.style.top = y == true? ballTop + 8 + "px" : ballTop - 8 + "px";
    ball.style.left = x == true? ballLeft + 8 + "px" : ballLeft - 8 + "px";

    requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);

