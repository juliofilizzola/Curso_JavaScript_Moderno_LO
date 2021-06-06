// exemplos de objetos

const array = {
  xablau: "Fala",
  enshinua: 'tribo,',
  map: 'Beleza?'
}

const concat = ({xablau, enshinua, map}) => `${xablau} ${enshinua} ${map}`;

console.log(concat(array));

const people = (fistName, lastName, age) => ({fistName, lastName, age});// criando um objeto

// quando deixamos assim a chave com o mesmo nome do que o paramentro que vai ser valor o javascript já entende que é chave e valor.


const people1 = people('Luiz', 'Fernando', 23);

console.log(people1);

const people2 = {
  Fala: 'Beleza?',
  Beleza: 'Tribo,',
  Tribo: 'Fala',

  falar() { 
    console.log(`${this.Tribo} ${this.Beleza} ${this.Fala}`);
  },
}

people2.falar();
