const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const libro = xmlDoc.getElementsByTagName("libro");
  const autors = xmlDoc.getElementsByTagName("autor");
  console.log(libro);
  console.log(autors);
  mostrarLibros(libro, autors);
};
xhttp.open("GET", "./DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function mostrarLibros(libro, autors) {
  let html = "";

  //console.log(libro);

  for (let i = 0; i < 6; i++) {
    const titulo = libro[i].getElementsByTagName("titulo")[0].textContent;
    //console.log(titulo);
    const autor = autors[i].getElementsByTagName("nombre")[0].textContent;

    html += `
            <div class="libro">
                <img src="/img/book.png"
                     alt="Portada"
                     width="80">

                <h3>${titulo}</h3>
                <p>${autor}</p>


               
            </div>
        `;
  }
  repisa.innerHTML = html;
}
