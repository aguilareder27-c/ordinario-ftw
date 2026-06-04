const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const libro = xmlDoc.getElementsByTagName("libro");
  const fav = xmlDoc.getElementsByTagName("favorito");
  console.log(libro);
  console.log(fav);
  mostrarLibros(libro, fav);
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function mostrarLibros(libro, fav) {
  let html = "";

  //console.log(libro);

  for (let i = 0; i < libro.length; i++) {
    const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;
    const id = libro[i].getAttribute("id");

    for (let j = 0; j < fav.length; j++) {
      if (fav[j].getAttribute("libro") === id) {
        html += `
            <div class="libro">
              <div class="portada">
                <img src="/img/book.png"
                     alt="Portada"
                     width="80">
              </div>

                <h3>${titulo}</h3>
            </div>
        `;
      }
    }
  }

  repisa.innerHTML = html;
}
