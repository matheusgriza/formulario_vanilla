const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  
  const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
  }


const form = document.querySelector('form')
const message = document.querySelector('.message')
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputIdade = document.querySelector('input[name="idade"]');
const inputCPF = document.querySelector('input[name="cpf"]');

let isValidForm = false;

const resetInput = (el) => {
    el.classList.remove('invalid');
    el.nextElementSibling.classList.add('error-hidden')
}

const invalidateElement = (el) =>{
    el.classList.add('invalid');
    el.nextElementSibling.classList.remove('error-hidden') //Agarra o proximo elemento HTML na pagina, neste caso o erro
    isValidForm = false;
}

const validateInput = () =>{
    isValidForm = true;
    if (!inputName.value){
        invalidateElement(inputName)
    }

    if (!isValidEmail(inputEmail.value)){
        invalidateElement(inputEmail)
    }

    if (!inputIdade.value){
        invalidateElement(inputIdade)
    }

    if (!isValidCPF(inputCPF.value)){
        invalidateElement(inputCPF)
    }
}


form.addEventListener("submit", (e) =>{
    e.preventDefault()
    validateInput()

    if (isValidForm){
        //PoST - Backend
        console.log('Validou e enviou');
        form.remove();
        message.classList.remove('error-hidden');
    }
})

inputName.addEventListener("input", () =>{
    resetInput(inputName);  
})

inputIdade.addEventListener("input", () =>{
    resetInput(inputIdade);
})

inputEmail.addEventListener("input", () =>{
    resetInput(inputEmail);
})

inputCPF.addEventListener("input", () =>{
    resetInput(inputCPF);
})  