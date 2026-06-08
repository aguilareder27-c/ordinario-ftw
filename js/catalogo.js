const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const libro = xmlDoc.getElementsByTagName("libro");
  const autors = xmlDoc.getElementsByTagName("autor");
  console.log(libro);
  console.log(autors);
  llenarGeneros(libro);
  mostrarLibros(libro, autors, "todos");

  const filtro = document.getElementById("filtroGenero");
  filtro.addEventListener("change", function () {
    mostrarLibros(libro, autors, filtro.value);
  });
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];
function llenarGeneros(libro) {
  const filtro = document.getElementById("filtroGenero");
  const generos = [];

  for (let i = 0; i < libro.length; i++) {
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

function mostrarLibros(libro, autors, genero) {
  let html = "";

  //console.log(libro);

  for (let i = 0; i < libro.length; i++) {
    const gen = libro[i].getElementsByTagName("genero")[0].textContent;
    if (genero !== "todos" && gen !== genero) {
      continue;
    }
    const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;
    const id = libro[i].getAttribute("id");
    //console.log(titulo);
    const autor = autors[i].getElementsByTagName("nombre")[0].textContent;

    html += `
    <a href="detalle libro.html?id=${id}">
            <div class="libro">
              <div class="portada">
                <img src="../img/book.png"
                     alt="Portada"
                     width="80">
              </div>

                <h3>${titulo}</h3>
                <p>${autor}</p>
            </div>
            </a>
        `;
  }
  repisa.innerHTML = html;
}
