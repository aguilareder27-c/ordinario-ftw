const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const libro = xmlDoc.getElementsByTagName("libro");
  const fav = xmlDoc.getElementsByTagName("favorito");
  llenarGeneros(libro, fav);
  console.log(libro);
  console.log(fav);
  mostrarLibros(libro, fav, "todos");

  const filtro = document.getElementById("filtroGenero");
  filtro.addEventListener("change", function () {
    mostrarLibros(libro, fav, filtro.value);
  });
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function esFavorito(fav, id) {
  for (let j = 0; j < fav.length; j++) {
    if (fav[j].getAttribute("libro") === id) {
      return true;
    }
  }
  return false;
}

function llenarGeneros(libro, fav) {
  const filtro = document.getElementById("filtroGenero");
  const generos = [];
  for (let i = 0; i < libro.length; i++) {
    const id = libro[i].getAttribute("id");
    if (!esFavorito(fav, id)) continue;
    const gen = libro[i].getElementsByTagName("genero")[0].textContent;
    if (generos.indexOf(gen) === -1) {
      generos.push(gen);
    }
  }
  for (let i = 0; i < generos.length; i++) {
    const opcion = document.createElement("option");
    opcion.value = generos[i];
    opcion.textContent = generos[i];
    filtro.appendChild(opcion);
  }
}

function mostrarLibros(libro, fav, genero) {
  let html = "";

  for (let i = 0; i < libro.length; i++) {
    const id = libro[i].getAttribute("id");
    if (!esFavorito(fav, id)) continue;

    const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;
    const gen = libro[i].getElementsByTagName("genero")[0].textContent;

    if (genero !== "todos" && gen !== genero) continue;

    html += `
            <div class="libro">
              <div class="portada">
                <img src="../img/book.png"
                     alt="Portada"
                     width="80">
              </div>

                <h3>${titulo}</h3>
            </div>
        `;
  }

  repisa.innerHTML = html;
}