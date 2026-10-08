let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscorep = document.querySelector("#userscore");
const compscorep = document.querySelector("#compscore");


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if(userchoice === compchoice) {
        msg.innerText = "DRAW PLAY AGAIN";
         msg.style.backgroundColor = "#00bfff";
    } else {
        if(userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice = "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
    }
    showwinner(userwin,userchoice,compchoice);
};

const gencompchoice = () => {
    const option = ["rock","paper","scissor"];
    idx = Math.floor(Math.random()*3);
    return option[idx];
};

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore += 1;
        userscorep.innerText = userscore;
        msg.innerText = `YOU WIN !! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#20e050";
    } else {
        compscore += 1;
        compscorep.innerText = compscore;
        msg.innerText = `YOU LOSE!! ${compchoice} beats YOUR ${userchoice}`;
        msg.style.backgroundColor = "#ff3b30";
    }
};