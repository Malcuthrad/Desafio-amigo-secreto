let lista = document.getElementById("resultado");
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo");
    if(/\d/.test(nombre.value)) {   // verifica que el nombre ingresado sea solo letras.
        alert("Ingresa un nombre valido");
    } else if (amigos.includes(nombre.value)){  // verifica que no se repitan nombres.
        alert("Este nombre ya existe en la lista.")
    } else{ // ingresa un nombre a la lista
        let li = document.createElement('li');
        let liText = document.createTextNode(nombre.value);
        li.appendChild(liText);
        lista.appendChild(li);
        amigos.push(nombre.value);
    }
nombre.value = ""; // deja vacio la caja de texto para el sgte nombre a ingresar.
}

function sortearAmigo(){
    if (amigos.length > 0){  // verifica que el arreglo tenga elementos a sortear.
    let winner = amigos[Math.floor(Math.random() * amigos.length)];// si hay nombres entonces sortea 1 al azar.
    lista.innerHTML = `El amigo secreto es ${winner}`; // muestra en pantalla el nombre ganador.
    amigos = []; // al sortear un nombre el arreglo queda vacio.
    } else{
        alert("No hay nombres en la lista para sortear.")  // si no hay nombres ingresado no se hace el sorteo.
    }
}