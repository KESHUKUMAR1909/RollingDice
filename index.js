let diceArray = [];
function createDiceFaces(no_of_dots) {
    let div;

    switch (no_of_dots) {
        case 1:
            div = document.createElement("div");
            div.classList.add("dice_area");
            div.innerHTML += `    <div class=" column column1">
                                     <span  class="dot hidden"></span>
                                     <span  class="dot hidden"></span>
                                     <span  class="dot hidden"></span>
                                  </div>
                                  <div class=" column column2">
                                       <span  class="dot hidden"></span>
                                       <span  class="dot"></span>
                                       <span  class="dot hidden"></span>
                                 </div>
                                 <div class=" column column3">
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                 </div>`;
            break;
        case 2:
            div = document.createElement("div");
            div.classList.add("dice_area");
            div.innerHTML += `    <div class=" column column1">
                                     <span  class="dot hidden"></span>
                                     <span  class="dot hidden"></span>
                                     <span  class="dot hidden"></span>
                                  </div>
                                  <div class=" column column2">
                                       <span  class="dot  "></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot "></span>
                                 </div>
                                 <div class=" column column3">
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                 </div>`;
            break;
        case 3:
            div = document.createElement("div");
            div.classList.add("dice_area");
            div.innerHTML += `    <div class=" column column1">
                                     <span  class="dot hidden"></span>
                                     <span  class="dot hidden"></span>
                                     <span  class="dot hidden"></span>
                                  </div>
                                  <div class=" column column2">
                                       <span  class="dot"></span>
                                       <span  class="dot"></span>
                                       <span  class="dot"></span>
                                 </div>
                                 <div class=" column column3">
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                 </div>`;
            break;
        case 4:
            div = document.createElement("div");
            div.classList.add("dice_area");
            div.innerHTML += `    <div class=" column column1">
                                     <span  class="dot"></span>
                                     <span  class="dot hidden"></span>
                                     <span  class="dot "></span>
                                  </div>
                                  <div class=" column column2">
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                 </div>
                                 <div class=" column column3">
                                       <span  class="dot "></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot"></span>
                                 </div>`;
            break;
        case 5:
            div = document.createElement("div");
            div.classList.add("dice_area");
            div.innerHTML += `    <div class=" column column1">
                                     <span  class="dot "></span>
                                     <span  class="dot hidden"></span>
                                     <span  class="dot "></span>
                                  </div>
                                  <div class=" column column2">
                                       <span  class="dot hidden"></span>
                                       <span  class="dot "></span>
                                       <span  class="dot hidden"></span>
                                 </div>
                                 <div class=" column column3">
                                       <span  class="dot"></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot"></span>
                                 </div>`;
            break;
        case 6:
            div = document.createElement("div");
            div.classList.add("dice_area");
            div.innerHTML += `    <div class=" column column1">
                                     <span  class="dot "></span>
                                     <span  class="dot"></span>
                                     <span  class="dot"></span>
                                  </div>
                                  <div class=" column column2">
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                       <span  class="dot hidden"></span>
                                 </div>
                                 <div class=" column column3">
                                       <span  class="dot "></span>
                                       <span  class="dot"></span>
                                       <span  class="dot"></span>
                                 </div>`;
            break;
    }
    return div;

}
document.getElementById("dice_roll_button").addEventListener("click", () => {
    for (let i = 1; i <= 6; i++) {
        let div = createDiceFaces(i);
        diceArray.push(div);
    }
    appendTheDiceToThePlayArea();
});
function appendTheDiceToThePlayArea() {
    let scoreButton = document.querySelector("#score");
    scoreButton.textContent = `Your Score`;
    let diceArea = document.getElementById("dice_area");

    // Clear the dice area before appending a new dice
    diceArea.innerHTML = "";

    // Select a random dice from the array
    let randomNumber = Math.floor(Math.random() * 6);
    console.log(randomNumber);
    let randomDice = diceArray[randomNumber];

    // Add animation class before appending
    randomDice.classList.add("animation");

    // Append the selected dice to the dice area
    diceArea.appendChild(randomDice);

    // Optional: You can listen for when the animation ends, and then remove the class if you want
    randomDice.addEventListener("animationend", function () {
        randomDice.classList.remove("animation"); // Optional: Remove the class after animation ends
    });
    
    setTimeout(()=>{
        scoreButton.textContent = `Your Score is ${randomNumber+1}`;
    },1000)
    
}



