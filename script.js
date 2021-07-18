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
            <input type="text" class="input" onfocus="this.value=''" id="player1" name="fname" value="Astro..." required><br>
            <label for="lname">Player 2 :</label>
            <input type="text" class="input" onfocus="this.value=''" id="player2" name="lname" value="Knicks..." required><br>
            <label for="score">Score Limit :</label>
            <input type="radio" id="score" name="score" value="1">
            <label for="lname">1</label>
            <input type="radio" id="score" name="score" value="1">
            <label for="lname">3</label>
            <input type="radio" id="score" name="score" value="1">
            <label for="lname">5</label><br>
            <label for="level">Difficulty level :</label>
            <select name="level" id="level" required>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select><br>
            <div class="submit">
                <a class="go" href="table.html">GO</a>
            </div>
        </div>
    </div>
</div>`

background.appendChild(modal);
modalVisible = true;
})
