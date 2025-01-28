let amigos = [];
let nombre = document.getElementById("amigo");
let lista = document.getElementById("resultado");

function agregarAmigo(){
   if(isNaN(nombre.value)){
    let li = document.createElement('li');
    let liText = document.createTextNode(nombre.value);
    li.appendChild(liText);
    lista.appendChild(li);
    amigos.push(nombre.value);
    } else if (listaAmigos.includes(nombre.value)){
        alert("Este Amigo ya fue agregado.")
    } else{
        alert("Ingresa un nombre valido");
 }
 nombre.value = ""; 
}