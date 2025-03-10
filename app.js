// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaAmigos = 0; 
let amigoDeUsuario = 0;
let amigosIngresado = 0

function agregarAmigo() {
    let amigoDeUsuario = document.getElementById('amigo').value;
    if (amigoDeUsuario === "") {
        alert ("Ingresa un nombre válido");
    } else {
        amigos.push(amigoDeUsuario);
    }
    actualizaListaDeAmigos();
    limpiarCaja();
    console.log(amigoDeUsuario)
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizaListaDeAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = ''; 

    for (let i= 0; i < amigos.length; i++) {
        let amigoIngresado = document.createElement("li");
        amigoIngresado.innerHTML = amigos[i];

        listaAmigos.appendChild(amigoIngresado);
        
    }

}

function sortearAmigo() {
    

    if (amigos.length>1) {
        let resultado = Math.floor(Math.random()* amigos.length)-1;
        let amigosecreto = document.getElementById('resultado');
         amigosecreto.innerHTML = (`El amigo secreto sorteado es ${amigos[resultado]}`);
        return amigos[resultado];
    } else {
        alert ('Ingresa al menos 2 amigos ');
    }


}


