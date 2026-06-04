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
      console.log(titulo, autor);
      html += `
            <div class="libro">
              <div class="portada">
                <img src="/img/book.png"
                     alt="Portada"
                     width="80">
              </div>

                <h3>${titulo}</h3>
                <p>${autor}</p>
            </div>
        `;
    }
  }
  repisa.innerHTML = html;
}
