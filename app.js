let lista = document.getElementById("resultado");
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo");

    if(/\d/.test(nombre.value)) {
        alert("Ingresa un nombre valido");
    } else if (amigos.includes(nombre.value)){
        alert("Este nombre ya existe en la lista.")
    } else{
    let li = document.createElement('li');
    let liText = document.createTextNode(nombre.value);
    li.appendChild(liText);
    lista.appendChild(li);
    amigos.push(nombre.value);
        
 }
 nombre.value = ""; 
}