/*  Intro logica! */
/* Operadores de comparadores */
/*
Alguns conparadores
> maior que 
< menor do que 
== igual 
=== estritamente igual (essque normalmente usamos);
>= Maior ou igual 
<= menor ou igual 
!== estritamente diferente
!= diferente
*/

// exemplos 
const maior = 2>1;
console.log(maior); // retorna true;

const menor = 1<2;
console.log(menor); // retorna true;

console.log("------>");

const igual = '1' == 1;// não utilizamos mais.
console.log(igual);// retorna true;

const estritamente = '1' === 1;
console.log(estritamente); // retorna false;

console.log('--->');

const diferente = 23 != "23.0";// a gente não utiliza mais.
console.log(diferente);// Vai retornar false;

const estrid = 23 !== '23.0';
console.log(estrid);// vai retornar true;