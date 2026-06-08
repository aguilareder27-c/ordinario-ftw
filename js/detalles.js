const xhttp = new XMLHttpRequest();

console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const libro = xmlDoc.getElementsByTagName("libro");
  const autors = xmlDoc.getElementsByTagName("autor");

  mostrarLibros(libro, autors);
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function mostrarLibros(libro, autors) {
  let html = "";
  const parametros = new URLSearchParams(window.location.search);
  //console.log(parametros.get("id"));

  const parametro = parametros.get("id");
  //console.log(libro);

  for (let i = 0; i < libro.length; i++) {
    if (libro[i].getAttribute("id") == parametro) {
      const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;
      const autor = autors[i].getElementsByTagName("nombre")[0].textContent;
      const descri = libro[i].getElementsByTagName("descripcion")[0].textContent;
      const gen = libro[i].getElementsByTagName("genero")[0].textContent;
      console.log(titulo, autor,descri,gen);
      html += `
        <div class="libro-detalle">
          <div class="portada">
            <img src="/img/book.png" alt="Portada del libro">
          </div>

          <div class="info-libro">
            <h2>${titulo}</h2>
            <p class="autor">${autor}</p>

            <div class="etiquetas">
                <span>${gen}</span>
            </div>

            <p class="descripcion">
              ${descri}
            </p>
          </div>
        </div>
      `;
    }
  }
  repisa.innerHTML = html;
}
