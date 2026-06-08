const xhttp = new XMLHttpRequest();
console.log(xhttp);
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  const autors = xmlDoc.getElementsByTagName("autor");
  llenarNacionalidades(autors);
  console.log(autors);
  mostrarLibros(autors, "todas");

  const filtro = document.getElementById("filtroNacionalidad");
  filtro.addEventListener("change", function () {
    mostrarLibros(autors, filtro.value);
  });
};
xhttp.open("GET", "../DB/biblioteca.xml");
xhttp.send();

const repisa = document.getElementsByClassName("repisa")[0];

function llenarNacionalidades(autors) {
  const filtro = document.getElementById("filtroNacionalidad");
  const nacionalidades = [];
  for (let i = 0; i < autors.length; i++) {
    const nac = autors[i].getElementsByTagName("nacionalidad")[0].textContent;
    if (nacionalidades.indexOf(nac) === -1) {
      nacionalidades.push(nac);
    }
  }
  for (let i = 0; i < nacionalidades.length; i++) {
    const opcion = document.createElement("option");
    opcion.value = nacionalidades[i];
    opcion.textContent = nacionalidades[i];
    filtro.appendChild(opcion);
  }
}
function mostrarLibros(autors, nacionalidad) {
  let html = "";

  //console.log(libro);

  for (let i = 0; i < autors.length; i++) {
    //console.log(titulo);
    const autor = autors[i].getElementsByTagName("nombre")[0].textContent;
    const nac = autors[i].getElementsByTagName("nacionalidad")[0].textContent;

    if (nacionalidad !== "todas" && nac !== nacionalidad) {
      continue;
    }

    html += `
            <div class="libro">
              <div class="portada">
                <img src="../img/persona.png"
                     alt="Portada"
                     width="80">
              </div>
                <p>${autor}</p>
                <p class="nacionalidad">${nac}</p>
            </div>
        `;
  }
  repisa.innerHTML = html;
}
