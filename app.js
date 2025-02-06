// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y final

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de texto
    inputAmigo.value = "";
}

// Función para actualizar la lista de nombres en pantalla
function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar lista antes de actualizar

    listaAmigos.forEach((nombre, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = nombre;
        
        // Botón para eliminar un amigo de la lista
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);

        listItem.appendChild(botonEliminar);
        listaElement.appendChild(listItem);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos amigos para hacer un sorteo.");
        return;
    }

    // Elegir un amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}