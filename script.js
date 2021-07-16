let start = document.querySelector(".click");
let background = document.querySelector(".background");
let modalVisible = false;
start.addEventListener("click", function(){
    if(modalVisible) return;
    let modal = document.createElement("div");
    modal.classList.add("modal-container");
    modal.innerHTML = ` <div class="container">
    <div class="form">
        <div class="elements">
            <label for="fname">Player 1 :</label>
            <input type="text" class="input" id="fname" name="fname" value="Astro..."><br>
            <label for="lname">Player 2 :</label>
            <input type="text" class="input" id="lname" name="lname" value="Knicks..."><br>
            <label for="score">Score Limit :</label>
            <input type="radio" id="score" name="score" value="1">
            <label for="lname">1</label>
            <input type="radio" id="score" name="score" value="1">
            <label for="lname">3</label>
            <input type="radio" id="score" name="score" value="1">
            <label for="lname">5</label><br>
            <label for="level">Difficulty level :</label>
            <select name="level" id="level">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select><br>
            <input class="submit" type="submit" value="Go">
        </div>
    </div>
</div>`
background.appendChild(modal);
modalVisible = true;
})