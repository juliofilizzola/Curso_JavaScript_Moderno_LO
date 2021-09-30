const data = new Date();

console.log(data);
console.log(data.toString());

const TresHoras = 60 * 60 * 3 * 1000;
const Umdria = 60 * 60 * 24 * 1000;

const data0 = new Date(0 + TresHoras);
const data1 = new Date(0);

// hora zero é 01/01/1970 timestamp unix ou época do unix

console.log(data0.toString());

console.log(data1);


// formato de horas Ano, mês, dia, hora, minuto, seugndos e milesimos de segundo.

const newData = new Date(2021, 8, 30, 14, 40);

console.log(newData.toString());

// ou

const newData2 = new Date("2021-10-30 14:40");

console.log(newData2.toString());

