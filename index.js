const eleccionesUsuario = []
const eleccionesComputadora = []

const computerSelect = async () => {
    let selected;
    const probabilidad = Math.floor(Math.random() * 10) + 1;
    console.log("Probabilidad Computadora:",probabilidad)
    if(probabilidad > 7) {
        selected = "r";
    } else if(probabilidad < 5) {
        selected = "p";
    } else {
        selected = "s";
    };
    eleccionesComputadora.push(selected)
}

const userSelect = async () => {
    let selected;
    selected = prompt("Elige una! (r/p/s) > ")
    eleccionesUsuario.push(selected)
    computerSelect()
    comparar(eleccionesUsuario[0], eleccionesComputadora[0]);
    eleccionesUsuario.shift()
    eleccionesComputadora.shift()
};


const comparar = async (usuario, computadora) => {
    const respuesta = document.getElementById('id')
    if(usuario === "r" && computadora === "r") {
        return respuesta.innerHTML = "Fue un empate!"
    } else if(usuario === "p" && computadora === "p") {
        respuesta.innerHTML = "Fue un empate!"
    } else if(usuario === "s" && computadora === "s") {
        return respuesta.innerHTML = "Fue un empate!"
    }
    if(usuario === "r" && computadora === "s") {
        return respuesta.innerHTML = "Gano el usuario con Roca!"
    } else if(usuario === "s" && computadora === "p") {
        return respuesta.innerHTML = "Gano el usuario con Tijeras!"
    } else if(usuario === "p" && computadora === "r") {
        return respuesta.innerHTML = "Gano el usuario con Papel!"
    }
    if(usuario === "s" && computadora === "r") {
        return respuesta.innerHTML = "Gano la computadora con Roca!"
    } else if(usuario === "p" && computadora === "s") {
        return respuesta.innerHTML = "Gano la computadora con Tijeras!"
    } else if(usuario === "r" && computadora === "p") {
        return respuesta.innerHTML = "Gano la computadora con Papel!"
    }
}

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
    userSelect()
})