
const valuer = document.querySelector('.form');
console.log(valuer);
valuer.addEventListener('submit', (e) => {
  const input1 = document.querySelector('.input1')
  e.preventDefault();
  console.log(input1.value);
});


