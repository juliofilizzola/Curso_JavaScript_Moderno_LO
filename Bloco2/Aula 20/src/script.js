const myScope = () => {
  const forms = document.querySelector('.form');
  const div = document.querySelector('render')
  const submitForm = event => {
    event.preventDefault();
    const name = forms.querySelector('.name');
    const lastname = forms.querySelector('.lastname');
    const peso = forms.querySelector('.peso');
    const altura = forms.querySelector('.altura');
    
  }
  forms.addEventListener('submit', submitForm)
}

myScope();