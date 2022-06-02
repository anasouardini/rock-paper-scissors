const controls = document.querySelector(".controls");
const user = document.querySelector(".card.user");
const computer = document.querySelector(".card.computer");
const output = document.querySelector(".output span.result");

controls.addEventListener("click", e => {
    if(e.target == controls){return;}

    let userChoice = e.target.getAttribute("data-choice");
    let position = e.target.getAttribute("data-pos");
    user.style.cssText = `background-size: 20rem;background-image: url("../media/rps.png");background-position: ${position};`;

    let randomVal = Math.floor(Math.random()*(4-1)+1);
    computer.style.cssText = `
                            background-size: 20rem;
                            background-image: url("../media/rps.png");
                            background-position: ${document.querySelector(`.controls button:nth-of-type(${randomVal})`).getAttribute("data-pos")};
                            `;

    //a silly idea, I like to be different 🙂
    const winLoss = {
        "0":["Draw", "black", "0"],

        "1":["Won", "green", "user"],
        "-2":["Won", "green", "user"],

        "-1":["lost", "red", "computer"],
        "2":["lost", "red", "computer"]
    };

    calcVal = parseInt(userChoice)-randomVal;
    output.textContent = `${winLoss[calcVal][0]}`;
    output.style.cssText = `color: ${winLoss[calcVal][1]};`;

    if(calcVal != 0){
        wonCounterElm = document.querySelector(`.card.${winLoss[calcVal][2]}`).previousElementSibling;
        wonCounterElm.textContent = parseInt(wonCounterElm.textContent) + 1;
    }

})

