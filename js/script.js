const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  //console.log(xmlDoc);
  const catalogo = xmlDoc.getElementsByTagName("catalogo");
  console.log(catalogo);
  mostrarLibros(catalogo);
};
xhttp.open("GET", "./DB/biblioteca.xml");
xhttp.send();

function mostrarLibros(catalogo) {
  let html = "";

  console.log(catalogo);

  for (let i = 0; i < 5; i++) {
    const titulo = catalogo[i].getElementsByTagName("titulo")[0].textContent;

    //const autor = libros[i].getElementsByTagName("AUTOR")[0].textContent;

    html += `
            <div class="libro">
                <img src="/img/book.png"
                     alt="Portada"
                     width="80">

                <h3>${titulo}</h3>

               
            </div>
        `;
  }

  document.getElementById("repisa").innerHTML = html;
}
//<p>${autor}</p>
