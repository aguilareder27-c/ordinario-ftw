const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const libro = xmlDoc.getElementsByTagName("libro");
  console.log(libro);
  mostrarLibros(libro);
};
xhttp.open("GET", "./DB/biblioteca.xml");
xhttp.send();

function mostrarLibros(libro) {
  let html = "";

  console.log(libro);

  for (let i = 0; i < 5; i++) {
    const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;

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
