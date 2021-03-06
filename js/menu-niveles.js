function escribeNiveles() {
  var menuNiveles = document.querySelector(".selecciona-nivel ul");
  niveles.forEach(function (elemento, indice) {
    var controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivel fs-1'  data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    menuNiveles.appendChild(controlNivel);
  });
}

function cambiaNivel() {
  var nivel = parseInt(this.dataset.nivel);
  nivelActual = nivel;
  actualizaNivel();
  iniciar();
}

function muestraMenuNiveles(evento) {
  evento.stopPropagation();
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

function ocultaMenuNiveles() {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest("selecciona-nivel")) {
    return;
  }
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function teclaEscCierraDeMenu(evento) {
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}
