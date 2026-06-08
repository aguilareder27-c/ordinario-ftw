const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const contacto = xmlDoc.getElementsByTagName("contacto")[0];
  mostrarContacto(contacto);
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function mostrarContacto(contacto) {
  const email = contacto.getElementsByTagName("email")[0].textContent;

  const telNodo = contacto.getElementsByTagName("telefono")[0];
  const telefono = telNodo ? telNodo.textContent : "No disponible";

  repisa.innerHTML = `
    <div class="contacto-info">
      <h2>Datos de contacto</h2>

      <p class="dato">
        <span class="etiqueta">Correo electronico</span>
        <a href="mailto:${email}">${email}</a>
      </p>

      <p class="dato">
        <span class="etiqueta">Telefono</span>
        <a href="tel:${telefono}">${telefono}</a>
      </p>
    </div>
  `;
}