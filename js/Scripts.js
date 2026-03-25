// Selección de elementos del DOM
const navegacionPrincipal = document.querySelector("#navegacion-principal"); // Menú lateral
const botonAbrirMenu = document.querySelector("#abrir-menu"); // Botón abrir menú
const botonCerrarMenu = document.querySelector("#cerrar-menu"); // Botón cerrar menú
const fondoOscuro = document.querySelector("#fondo-oscuro"); // Overlay oscuro
const contenedorMedia = document.querySelector("#contenedor-media"); // Contenedor de video/audio

// Objeto con los recursos multimedia disponibles
const recursosMedia = {
    video: {
        tipo: "video", // Tipo de recurso
        html: `
            <video class="video-podcast" controls>
                <source src="videos/pez.mp4" type="video/mp4">
            </video>
        `, // HTML del video
    },
    audio1: {
        tipo: "audio",
        html: `
            <audio controls style="width: 100%; display: block;">
                <source src="audios/audio1.mp3" type="audio/mpeg">
            </audio>
        `, // HTML del audio 1
    },
    audio2: {
        tipo: "audio",
        html: `
            <audio controls style="width: 100%; display: block;">
                <source src="audios/audio2.mp3" type="audio/mpeg">
            </audio>
        `, // HTML del audio 2
    },
};

// Función para mostrar el menú
function abrirMenu() {
    navegacionPrincipal.classList.add("visible"); // Muestra menú
    fondoOscuro.classList.add("visible"); // Activa overlay
}

// Función para ocultar el menú
function cerrarMenu() {
    navegacionPrincipal.classList.remove("visible"); // Oculta menú
    fondoOscuro.classList.remove("visible"); // Oculta overlay
}

// Cambia el contenido multimedia (video/audio)
function cambiarMedia(tipo) {
    const recurso = recursosMedia[tipo]; // Obtiene recurso

    if (!recurso || !contenedorMedia) {
        return; // Sale si no existe
    }

    contenedorMedia.innerHTML = recurso.html; // Inserta nuevo HTML
}

// Eventos de botones
botonAbrirMenu?.addEventListener("click", abrirMenu); // Abrir menú
botonCerrarMenu?.addEventListener("click", cerrarMenu); // Cerrar menú
fondoOscuro?.addEventListener("click", cerrarMenu); // Cerrar al hacer clic fuera

// Cierra menú con tecla ESC
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        cerrarMenu();
    }
});

// Eventos para cambiar contenido al hacer clic en estrellas
document.querySelectorAll(".enlace-estrella").forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
        evento.preventDefault(); // Evita navegación
        cambiarMedia(enlace.dataset.media); // Cambia media según atributo
    });
});