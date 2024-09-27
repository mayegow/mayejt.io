const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const month       = document.getElementById('month')
const currentDate = new Date()
month.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`

menuToggle.onclick = () => {
    menuToggle.innerHTML=''
    navigation.classList.toggle('active')
    if(menuToggle.classList.contains('active')){
        menuToggle.classList.toggle('active')
        menuToggle.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>`
    } else {
        menuToggle.classList.toggle('active')
        menuToggle.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>`
        
    }
}

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const toggleMenu = () => {
    navigation.classList.toggle('active')
    if(menuToggle.classList.contains('active')){
        menuToggle.classList.toggle('active')
        menuToggle.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>`
    }

}




 document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault()
    const formData     = this
    const inputsData   = formData.querySelectorAll('input')
    const complete     = [...inputsData, formData.querySelector('textarea')]
    
    emailjs.init('moo2G9n3wyENmS0kz')
    emailjs.sendForm('service_bma9vdx', 'template_44y6u9c', this)
    .then(()=>{
        alert('Correo enviado con éxito! Muchas gracias por ponerte en contacto conmigo!')
        complete.forEach( inp => {
            if(inp.type !== 'submit'){
                inp.value = ''

            }
        })
    })
    .catch(e=>{
        alert(JSON.stringify(e))
    })
})



