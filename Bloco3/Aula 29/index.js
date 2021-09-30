const data = new Date("1987-04-21 00:00:00");
const diaDaSemana = data.getDay();
let diaDaSemanaTexto;
console.log(diaDaSemana);

switch(diaDaSemana) {
  case 0:
    diaDaSemanaTexto = "Domingo";
  break;
   case 1:
    diaDaSemanaTexto = "Segunda";
  break;
  case 2:
    diaDaSemanaTexto = "Terça";
  break;
   case 3:
    diaDaSemanaTexto = "Quarta";
  break;
  case 4:
    diaDaSemanaTexto = "Quinta";
  break;
  case 5:
    diaDaSemanaTexto = "Sexta";
  break;
  case 6:
    diaDaSemanaTexto = "Sábado";
  break;
  default:
    diaDaSemanaTexto = "";
}

console.log(diaDaSemanaTexto);