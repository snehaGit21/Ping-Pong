
//.......................change Avatars.................................
function changeAvatar1(){
        let url = document.querySelector(".avatar1").src.slice(36,37);
        let current = parseInt(url) + 1;
        document.querySelector(".avatar1").src = "avatars/avatar" + current % 8 + ".jpg";
}
function changeAvatar2(){
    let url = document.querySelector(".avatar2").src.slice(36,37);
    let current = parseInt(url) + 1;
    document.querySelector(".avatar2").src = "avatars/avatar" + current % 8 + ".jpg";
}
//................................................................................

function remove1(){
    document.querySelectorAll(".playerName")[0].innerHTML = "";
}
function remove2(){
    document.querySelectorAll(".playerName")[1].innerHTML = "";
}
//.......................................................................

let ball = document.querySelector(".ball");
let board = document.querySelector(".table");
let leftPaddle = document.querySelector(".paddleLeft");
let rightPaddle = document.querySelector(".paddleRight");
let boardBoundary = board.getBoundingClientRect();
let x = true;
let y = true;
let playerLives = 5;
let leftPlayerLives = 5;
let rightPlayerLives = 5;

function deductLife(index){
  let lives = document.querySelectorAll(".life");
  lives[index].src = "deduced.png";
}
//...........................move Paddle................................
window.addEventListener("keydown", function(e){
    if(e.key == "w"){
        movePaddle(leftPaddle, -window.innerHeight * 0.1);
    }else if(e.key == "s"){
        movePaddle(leftPaddle, window.innerHeight * 0.1);
    }else if(e.key == "ArrowUp"){
        movePaddle(rightPaddle, -window.innerHeight * 0.1);
    }else if(e.key == "ArrowDown"){
        movePaddle(rightPaddle, window.innerHeight * 0.1);
    }
});
function movePaddle(currPaddle, change){
    let currPaddleBounds = currPaddle.getBoundingClientRect();
    if(currPaddleBounds.top + change >= boardBoundary.top && currPaddleBounds.bottom + change <= boardBoundary.bottom){
        currPaddle.style.top = currPaddleBounds.top + change + "px";
    }
}

//......................move ball.................................
setTimeout(
    function moveBall(){
        let ballCords = ball.getBoundingClientRect();
        let ballTop = ballCords.top;
        let ballLeft = ballCords.left;
        let ballRight = ballCords.right;
        let ballBottom = ballCords.bottom;
        let name1 = document.querySelector(".playerName").innerHTML;
        let name2 = document.querySelectorAll(".playerName")[1].innerHTML;
    
        let hasTouchedLeft = ballLeft < boardBoundary.left;
        let hasTouchedRight = ballRight > boardBoundary.right;
        if(hasTouchedLeft || hasTouchedRight){
            if(hasTouchedLeft){
                leftPlayerLives--;
                deductLife(leftPlayerLives);
                if(leftPlayerLives == 0){
                    let result = document.createElement("div");
                    result.classList.add("result-container");
                    result.innerHTML = `<div class="result">
                    <div class="winner">
                        <div class="winnerName">${name1}</div>
                        <div class="wins">Wins</div>
                    </div>
                    <div class="winningEmoji">
                        <img src="result.gif">
                    </div>
                </div>`;
                    board.appendChild(result);
                    setTimeout(function(){
                        document.location.reload()
                    }, 3000);
                }
                else{
                    return reset();
                }
            }else{
                rightPlayerLives--;
                deductLife(5 + rightPlayerLives);
                if(rightPlayerLives == 0){
                    let result = document.createElement("div");
                    result.classList.add("result-container");
                    result.innerHTML = `<div class="result">
                    <div class="winner">
                        <div class="winnerName">${name2}</div>
                        <div class="wins">Wins</div>
                    </div>
                    <div class="winningEmoji">
                        <img src="result2.gif">
                    </div>
                </div>`;
                    board.appendChild(result);
                    setTimeout(function(){
                        document.location.reload()
                    }, 3000);
                }
                else{
                    return reset();
                }
            }
        }
        function reset(){
            ball.style.top = window.innerHeight * 0.45 + "px";
            ball.style.left = window.innerWidth * 0.45 + "px";
            requestAnimationFrame(moveBall);
        }
    
        if(ballTop <= boardBoundary.top || ballBottom >= boardBoundary.bottom){
            y = !y;
        }
        if(ballLeft <= boardBoundary.left || ballRight >= boardBoundary.right){
            x = !x;
        }
    //.......................ball-paddle collision..................
        let leftPaddleBounds = leftPaddle.getBoundingClientRect();
        let rightPaddleBounds = rightPaddle.getBoundingClientRect();
    
        if(ballLeft <= leftPaddleBounds.right && 
            ballRight >= leftPaddleBounds.left &&
            ballTop + 40 >= leftPaddleBounds.top &&
            ballBottom - 40 <= leftPaddleBounds.bottom){
                x = !x;
            }
    
        if(ballLeft <= rightPaddleBounds.right && 
            ballRight >= rightPaddleBounds.left &&
            ballTop + 40 >= rightPaddleBounds.top &&
            ballBottom - 40 <= rightPaddleBounds.bottom){
                x = !x;
            }
    
        ball.style.top = y == true? ballTop + 8 + "px" : ballTop - 8 + "px";
        ball.style.left = x == true? ballLeft + 8 + "px" : ballLeft - 8 + "px";
    
        //requestAnimationFrame(moveBall);
}, 3000);
//requestAnimationFrame(moveBall);


