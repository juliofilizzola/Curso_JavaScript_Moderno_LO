const nameFull = prompt('digite um documento');

const creatDiv = (name) => {
  document.body.innerHTML += `Meu nome completo: <strong>${name}</strong><br/>`;
  document.body.innerHTML += `Numeros de letras: ${name.length}<br/>`;
  document.body.innerHTML += `Segunda letra do meu nome: ${name[1]}</br>`;
  document.body.innerHTML += `Primeiro indice da letra U do meu nome: ${name.indexOf('u')}<br/>`;
  document.body.innerHTML += `Primeiro indice da letra U do meu nome: ${name.lastIndexOf('Z')}<br/>`;
  document.body.innerHTML += `As últimas 3 letras do meu nome: ${name.slice(-3)}<br/>`;
  document.body.innerHTML += `As palavras do meu nome são: ${name.split(' ')}<br/>`;
  document.body.innerHTML += `Nome maiúsculo : ${name.toUpperCase()}<br/>`;
  document.body.innerHTML += `Nome minúsculo : ${name.toLowerCase()}<br/>`;

}

creatDiv(nameFull);

