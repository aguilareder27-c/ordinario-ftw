const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const autors = xmlDoc.getElementsByTagName("autor");
  console.log(autors);
  mostrarLibros(autors);
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function mostrarLibros(autors) {
  let html = "";

  //console.log(libro);

  for (let i = 0; i < autors.length; i++) {
    //console.log(titulo);
    const autor = autors[i].getElementsByTagName("nombre")[0].textContent;

    html += `
            <div class="libro">
              <div class="portada">
                <img src="/img/persona.png"
                     alt="Portada"
                     width="80">
              </div>
                <p>${autor}</p>
            </div>
        `;
  }
  repisa.innerHTML = html;
}
