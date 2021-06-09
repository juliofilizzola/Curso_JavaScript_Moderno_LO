/**
 * && -> false  && true -> false 'O valor mesmo'
 * False é um false é um valor false literal 
 * {0 é avaliado em falso 
 * string vazia
 * null/ undefined 
 * NaN } - são consiederados valores que podem ser avaliado em false. 
 * ---------------------------------------
 * || -> true && false -> true 'vai retornar o valor verdadeiro';
 */

// exemplo 

console.log( 'Jõa' && true && 'Maria');

// podemos comparar qualquer tipo de dado;

/** O que aconteceu nesse exemplo foi:
 * verificou se 'Jõa' é true e depois verificou se true é 'Maria' e retornou o ultimo;
 */


const falaOi = () => 'oi';

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // retorna o falso;

console.log(0 || false || null || "xablau");

/**
 * No exemplo acima, vimos um pouco como o Ou funciona;
 * Ele precisa de um item verdadeiro para retornar;
 * 
 */

// outro exemplo 

const a = NaN;
const b = undefined;
const c = '';
const d = null;
const e = false;
const f = 0;

console.log(a || b || c || d || e || f );

/**
 * Aqui, como todos são falso, ele retorna o ultimo falso, que no caso é o f;
 */

/** Só uma adendo, o false, só é false se estiver escrito naturalmente
 * se ele estiver entre '', vai ser considerado como true nessa comparação;
 */