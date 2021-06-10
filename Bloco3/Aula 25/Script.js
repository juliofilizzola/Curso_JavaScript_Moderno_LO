/** Outro exemplos de If */

const number = 10;

if (number >= 0 && number <= 5 ) {
  console.log('O número está entre 0 e 5');
} // não retornou 
if (number >= 5) {
  console.log('O numero NÂO está entre 0 e 5');
}// retornou 

/** Aqui ele executa um bloco se passar na condição, então se desencader um escopo de bloco, automaticamente o proximo não sera executado.  */