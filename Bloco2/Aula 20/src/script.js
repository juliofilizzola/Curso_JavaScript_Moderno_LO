const myScope = () => {
  const forms = document.querySelector('.form');
  forms.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Xabalu')
    console.log('vish');
  });

}

myScope();