const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const estadisticas = xmlDoc.getElementsByTagName("estadisticas")[0];
  mostrarEstadisticas(estadisticas);
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function mostrarEstadisticas(estadisticas) {
  const totalLibros = estadisticas.getElementsByTagName("totalLibros")[0].textContent;
  const totalAutores = estadisticas.getElementsByTagName("totalAutores")[0].textContent;
  const librosFavoritos = estadisticas.getElementsByTagName("librosFavoritos")[0].textContent;

  repisa.innerHTML = `
    <div class="tarjeta">
      <span class="numero">${totalLibros}</span>
      <span class="texto">Libros totales</span>
    </div>
    <div class="tarjeta">
      <span class="numero">${totalAutores}</span>
      <span class="texto">Autores</span>
    </div>
    <div class="tarjeta">
      <span class="numero">${librosFavoritos}</span>
      <span class="texto">Libros favoritos</span>
    </div>
  `;
}