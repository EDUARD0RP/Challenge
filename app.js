function Encriptar() {
    const textarea = document.getElementById("entrada__texto");
    const texto = textarea.value;

    if (/[A-Z]/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas.");
        return;
    }

    const textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    const imagen = document.getElementById("imagen-joven");
    imagen.style.display = "none";

    const instruccion = document.getElementById("instruccion");
    instruccion.style.display = "none";

    const mensajeEncriptado = document.getElementById("mensaje-encriptado");
    mensajeEncriptado.textContent = textoEncriptado;
};

function Desencriptar() {
    const textarea = document.getElementById("entrada__texto");
    const texto = textarea.value;

    if (/[A-Z]/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas.");
        return;
    }

    const textoEncriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    console.log(textoEncriptado);
};