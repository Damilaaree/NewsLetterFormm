const containerE2 = document.getElementById('container')
const leftE2 = document.getElementById('left')
const rightE2 = document.getElementById('right')

const userEmailE1 = document.getElementById('user-email')
const invalidEmailE1 = document.getElementById('invalid-email')
const emailInput = document.getElementById('email')
const submitBtnE1 = document.getElementById('submit-btn')

const confirmedMessageE1 = document.getElementById('confirmed-message')
const dismissMessageE1 = document.getElementById('dismiss-message')

function formSuccess(){
    confirmedMessageE1.classList.add('active')
    containerE2.classList.add('success')
    leftE2.style.display='none'
    rightE2.style.display='none'
    }
    function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
    }
    submitBtnE1.addEventListener('click',(e) => {
    e.preventDefault()
    const email=emailInput.value.trim()

    if(validateEmail(email)){
    formSuccess()
    userEmailE1.innerText = email
    emailInput.value = ''
    invalidEmailE1.classList.remove('active')
    emailInput.classList.remove('active')
    }else{
    invalidEmailE1.classList.add('active')
    emailInput.classList.add('active')
    }
    })
    dismissMessageE1.addEventListener('click',() =>{
    leftE2.style.display = 'block'
    rightE2.style.display='block'
    containerE2.classList.remove('success')
    confirmedMessageE1.classList,remove('active')
    })