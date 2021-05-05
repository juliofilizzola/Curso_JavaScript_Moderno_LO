// alert('Com a nossa mensagem.');

const getButton = () => {
  const button = document.createElement('button');
  button.innerText= 'OLHA ESSE BOTÃO AQUI!';
  document.body.appendChild(button);
};

getButton();

// const conf = confirm('olha isso!');
const numb = prompt('Digita ai');
const numb2 = prompt('Digita ai, denovo');


const result = Number(numb) + Number(numb2);
alert(result);
// console.log(conf);
console.log(numb);
console.log(result);

