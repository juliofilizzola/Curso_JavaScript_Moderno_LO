const myScope = () => {
  const forms = document.querySelector('.form');
  const div = document.querySelector('.render');
  const people = [];

  const submitForm = event => {
    event.preventDefault();
    const name = forms.querySelector('.name');
    const lastname = forms.querySelector('.lastname');
    const peso = forms.querySelector('.Peso');
    const altura = forms.querySelector('.altura');
    people.push({
      name: name.value,
      sobrenome: lastname.value,
      peso:  peso.value,
      altura: altura.value
    });
   div.innerHTML += `<p> ${name.value} </p> 
   <p> ${lastname.value}</p>
   <p> ${peso.value}</p>
   <p> ${altura.value} </p>
   `
  }

  forms.addEventListener('submit', submitForm);
  
}

myScope();