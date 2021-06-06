const numero = prompt('Digite o número');
const div = document.querySelector('.div');
const span = document.querySelector('.numero-title')

span.innerHTML = numero;

div.innerHTML += `<p> é NaN? ${numero !== 'number'}. </p>`;
div.innerHTML += `<p> Raiz Quadrada ${numero ** 0.5}. </p>`;
div.innerHTML += `<p> ${numero} é inteiro? ${numero.isInteger(numero)}. </p>`;
div.innerHTML += `<p> Arrendondando para Baixo: ${Math.floor(numero)}. </p>`;
div.innerHTML += `<p> Arrendondando para cima: ${Math.ceil(numero)}. </p>`;
div.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;


