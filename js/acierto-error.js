function acierto(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();

  //numAciertos++;
  //aciertos.innerHTML = numAciertos;
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  setTimeout(function () {
    lasTarjetas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
  document.querySelector("#sonido-error").play();

  //numErrores++;
  //errores.innerHTML = numErrores;
}
