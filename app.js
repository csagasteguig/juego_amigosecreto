// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y fin
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    input.value = ""; // Limpiar el campo de texto
    actualizarLista();
}

// Función para actualizar la lista visible de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("fade-in"); // Agrega animación a la lista
        
        // Agregar botón para eliminar nombres de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px"; // Agregar espacio entre el nombre y el botón
        btnEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 nombres para hacer el sorteo.");
        return;
    }
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior
    
    let indexSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indexSorteado];
    
    // Animación para hacer el sorteo más llamativo
    let mensaje = document.createElement("li");
    mensaje.textContent = "Sorteando...";
    resultado.appendChild(mensaje);
    
    // Agregar sonido al sorteo
    let audio = new Audio("assets/sorteo.mp3");
    audio.play();
    
    setTimeout(() => {
        mensaje.textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;
    }, 2000); // Retraso de 2 segundos para el efecto de sorteo
}

// Función para reiniciar la lista de amigos
function reiniciarLista() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}

// Agregar botón de reinicio al HTML
const botonReinicio = document.createElement("button");
botonReinicio.textContent = "🔄 Reiniciar";
botonReinicio.onclick = reiniciarLista;
document.querySelector(".button-container").appendChild(botonReinicio);
