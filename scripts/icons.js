VanillaTilt.init(document.querySelectorAll('.sci li a'), {
    max:30,
    speed: 400,
    glare: true
})


const list = document.querySelectorAll('.sci li')
const bg   = document.getElementById('icon-content')

list.forEach(element => {
    element.addEventListener('mouseenter', (event)=>{
        const color = event.target.style.getPropertyValue('--clr')
        bg.style.background = color;
        bg.style.color      = "white !important";
    })
    element.addEventListener('mouseleave', (event)=>{
        bg.style.background = '#fff';
    })
})

