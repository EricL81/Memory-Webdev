var modoRelax = false;
var movimientos = 0;
var cronometro;

/* var grupoTarjetas = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👠", "👑"],
  ["👻", "☘️", "🍄", "☂️"],
  ["💎", "🧸", "🏀", "🍉"],
]; */

var grupoTarjetas = [
  ['html5.png','css3.png'],
  ['js.png','php.png'],
  ['react.png','angular.png','vue.png','bootstrap.png'],
  ['mysql.png','laravel.png','python.png','c.png'],

];


var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
    tiempoMaxMin: 0,
    tiempoMaxSec: 10,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8,
    tiempoMaxMin: 0,
    tiempoMaxSec: 30,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 15,
    tiempoMaxMin: 1,
    tiempoMaxSec: 00,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25,
    tiempoMaxMin: 1,
    tiempoMaxSec: 30,
  },
/*   {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60,
    tiempoMaxMin: 2,
    tiempoMaxSec: 00,
  }, */
];
