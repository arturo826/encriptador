function encriptarTexto() {
  let textoIngresado = document.getElementById("area-texto").value;
  let tituloResultado = document.getElementById("titulo-resultado");
  let textoResultado = document.getElementById("texto-resultado");
  let imagenMuneco = document.getElementById("imagen-muneco");

  let textoEncriptado = textoIngresado
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (textoIngresado.length !== 0) {
    document.getElementById("area-texto").value = textoEncriptado;
    tituloResultado.textContent = "Texto encriptado con éxito";
    textoResultado.textContent = "";
    imagenMuneco.src = "./img/encriptado.jpg";
  } else {
    imagenMuneco.src = "./img/muñeco.png";
    tituloResultado.textContent = "Ningún mensaje fue encontrado";
    textoResultado.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptarTexto() {
  let textoIngresado = document.getElementById("area-texto").value;
  let tituloResultado = document.getElementById("titulo-resultado");
  let textoResultado = document.getElementById("texto-resultado");
  let imagenMuneco = document.getElementById("imagen-muneco");

  let textoDesencriptado = textoIngresado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  if (textoIngresado.length !== 0) {
    document.getElementById("area-texto").value = textoDesencriptado;
    tituloResultado.textContent = "Texto desencriptado con éxito";
    textoResultado.textContent = "";
    imagenMuneco.src = "./img/desencriptado.jpg";
  } else {
    imagenMuneco.src = "./img/muñeco.png";
    tituloResultado.textContent = "Ningún mensaje fue encontrado";
    textoResultado.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
