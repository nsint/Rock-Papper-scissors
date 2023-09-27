const eleccionesUsuario = [];
const eleccionesComputadora = [];
const playerSelection = document.getElementById("player");
const computerSelection = document.getElementById("machine");
const btn = document.querySelectorAll(".btn");
const wins = document.getElementById("wins");
const ties = document.getElementById("ties");
const loses = document.getElementById("loses");

let losesCount = 0;
let winsCount = 0;
let tiesCount = 0;
let roundCount = 0;

const username = window.localStorage.getItem('username');

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
} 
const computerSelect = () => {
    let selected;
    const probabilidad = Math.floor(Math.random() * 10) + 1;
    console.log("Probabilidad Computadora:", probabilidad);
    if (probabilidad > 7) {
        selected = "r";
        computerSelection.innerHTML = "✊";
    } else if (probabilidad < 5) {
        selected = "p";
        computerSelection.innerHTML = "👋";
    } else {
        selected = "s";
        computerSelection.innerHTML = "✌️";
    };
    eleccionesComputadora.push(selected);
}

const userSelect = () => {
    computerSelect();
    comparar(eleccionesUsuario[0], eleccionesComputadora[0]);
    eleccionesUsuario.shift();
    eleccionesComputadora.shift();
};

async function selectRandom() {
    let options = ["✊", "👋", "✌️"];
    for (let i = 0; i < 3; i++) {
        for (let x = 0; x < 3; x++) {
            computerSelection.innerHTML = options[x];
            await sleep(80);
        };
    }
}

function comparar(usuario, computadora) {
    const respuesta = document.getElementById('actual-round')
    if (usuario === "r" && computadora === "r") {
        respuesta.innerHTML = "Fue un empate!";
        tiesCount = tiesCount + 1;
        ties.innerHTML = tiesCount;
    } else if (usuario === "p" && computadora === "p") {
        respuesta.innerHTML = "Fue un empate!";
        tiesCount = tiesCount + 1;
        ties.innerHTML = tiesCount;
    } else if (usuario === "s" && computadora === "s") {
        respuesta.innerHTML = "Fue un empate!";
        tiesCount = tiesCount + 1;
        ties.innerHTML = tiesCount;
    }
    if (usuario === "r" && computadora === "s") {
        respuesta.innerHTML = `Ganó <bold>${username}</bold> con Roca!`;
        winsCount = winsCount + 1;
        wins.innerHTML = winsCount;
    } else if (usuario === "s" && computadora === "p") {
        respuesta.innerHTML = `Ganó <bold>${username}</bold> con Tijeras!`;
        winsCount = winsCount + 1;
        wins.innerHTML = winsCount;
    } else if (usuario === "p" && computadora === "r") {
        respuesta.innerHTML = `Ganó <bold>${username}</bold> con Papel!`;
        winsCount = winsCount + 1;
        wins.innerHTML = winsCount;
    }
    if (usuario === "s" && computadora === "r") {
        respuesta.innerHTML = "Ganó <bold>Machine</bold> con Roca!";
        losesCount = losesCount + 1;
        loses.innerHTML = losesCount;
    } else if (usuario === "p" && computadora === "s") {
        respuesta.innerHTML = "Ganó <bold>Machine</bold> con Tijeras!";
        losesCount = losesCount + 1;
        loses.innerHTML = losesCount;
    } else if (usuario === "r" && computadora === "p") {
        respuesta.innerHTML = "Ganó <bold>Machine</bold> con Papel!";
        losesCount = losesCount + 1;
        loses.innerHTML = losesCount;
    }
}

const nick = document.querySelector('code');

nick.addEventListener('click', e => {
    document.querySelector("#container").style.opacity = 0;
    document.querySelector("#card-input").style.display = "block";
});

document.querySelector("#submit-nick").addEventListener('click', e => {
    e.preventDefault();
    window.localStorage.setItem('username', document.querySelector("#new-nick").value);
    document.querySelector("#nickname").innerHTML = document.querySelector("#new-nick").value;
    document.querySelector("#container").style.opacity = 1;
    document.querySelector("#card-input").style.display = "none";
});

if (username == null){
    window.localStorage.setItem('username', "Player");
}

document.querySelector("#nickname").innerHTML = window.localStorage.getItem('username');

btn.forEach(button => {
    button.addEventListener('click', async e => {
        e.preventDefault(); 
        if (button.name === "rock") {
            eleccionesUsuario.push("r");
            playerSelection.innerHTML = "✊"
        } 

        if (button.name === "scissors") { 
            eleccionesUsuario.push("s");
            playerSelection.innerHTML = "✌️"
        } 

        if (button.name === "paper") {
            eleccionesUsuario.push("p");
            playerSelection.innerHTML = "👋"
        }
        await selectRandom();
        roundCount = roundCount + 1;
        document.getElementById("rounds").innerHTML = roundCount;
        loses.innerHTML = losesCount;
        userSelect();
    });
});