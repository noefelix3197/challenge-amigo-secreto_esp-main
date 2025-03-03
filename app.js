// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if(nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        document.getElementById("amigo").focus();
        mostrarAmigos();
    }

}
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    if(amigos.length < 1) {
        alert("Por favor, ingrese al menos un amigo.");
        return;
    }
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = ganador;
}