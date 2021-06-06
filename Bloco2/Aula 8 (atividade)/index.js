// Atividade

const nome = 'Julio';
const Sobrenome = 'Filizzola';
let idade = 24;
const peso = 84;
const altura = 1.60;
let imc; 
let anoDeNacimento;


imc = peso / (altura*altura);
idade = 25;
anoDeNacimento = 2021 - idade;

console.log(imc);
console.log(anoDeNacimento);

const result = `o ${nome} ${Sobrenome}, que tem ${idade} anos (${anoDeNacimento}) e
${peso}kg e ${altura} de altura, tem um de ${imc}`;

console.log(result);