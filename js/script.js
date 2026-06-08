const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const libro = xmlDoc.getElementsByTagName("libro");
  const autors = xmlDoc.getElementsByTagName("autor");
  console.log(libro);
  console.log(autors);
  mostrarLibros(libro, autors);

  const buscador = document.getElementById("buscador");
  const formulario = document.querySelector("form[role='search']");
  buscador.addEventListener("input", function () {
    buscar(libro, autors, buscador.value);
  });
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    buscar(libro, autors, buscador.value);
  });
};
xhttp.open("GET", "DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function mostrarLibros(libro, autors) {
  let html = "";
  for (let i = 0; i < 6; i++) {
    const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;
    const autor = autors[i].getElementsByTagName("nombre")[0].textContent;
    const id = libro[i].getAttribute("id");
    html += `
    <a href="paginas/detalle libro.html?id=${id}">
            <div class="libro">
              <div class="portada">
                <img src="img/book.png"
                     alt="Portada"
                     width="80">
              </div>

                <h3>${titulo}</h3>
                <p>${autor}</p>
            </div>
        `;
  }
  repisa.innerHTML = html;
}

function buscar(libro, autors, texto) {
  const t = texto.toLowerCase().trim();

  if (t === "") {
    mostrarLibros(libro, autors);
    return;
  }

  let html = "";
  for (let i = 0; i < libro.length; i++) {
    const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;
    const autor = autors[i].getElementsByTagName("nombre")[0].textContent;
    const id = libro[i].getAttribute("id");

    if (titulo.toLowerCase().includes(t) || autor.toLowerCase().includes(t)) {
      html += `
      <a href="paginas/detalle libro.html?id=${id}">
            <div class="libro">
              <div class="portada">
                <img src="img/book.png"
                     alt="Portada"
                     width="80">
              </div>

                <h3>${titulo}</h3>
                <p>${autor}</p>
            </div>
        `;
    }
  }

  if (html === "") {
    html = "<p>No se encontraron libros.</p>";
  }

  repisa.innerHTML = html;
}
