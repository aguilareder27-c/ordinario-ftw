const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const usuarios = xmlDoc.getElementsByTagName("usuario");
  conectarFormulario(usuarios);
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

// Conecta el formulario y valida al enviar
function conectarFormulario(usuarios) {
  const formulario = document.getElementById("formAcceso");
  const mensaje = document.getElementById("mensaje");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    validar(usuarios, usuario, password, mensaje);
  });
}

function validar(usuarios, usuario, password, mensaje) {
  let valido = false;

  for (let i = 0; i < usuarios.length; i++) {
    const nombre = usuarios[i].getElementsByTagName("nombre")[0].textContent;
    const clave = usuarios[i].getElementsByTagName("password")[0].textContent;
    if (nombre === usuario && clave === password) {
      valido = true;
      break;
    }
  }

  if (valido) {
    mensaje.textContent = "Acceso correcto. Bienvenido " + usuario + ".";
    mensaje.className = "mensaje ok";
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
    mensaje.className = "mensaje error";
  }
}