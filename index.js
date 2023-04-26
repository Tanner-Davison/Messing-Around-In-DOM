let inputBox = document.querySelector('.inputBox')
let myBtn = document.querySelector('#button1')
let form = document.querySelector('.form1')

myBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    let newUl = document.createElement('ul');
    let newLi = document.createElement('li')
    newLi.textContent=inputBox.value
    form.appendChild(newUl)
    newUl.appendChild(newLi)
})