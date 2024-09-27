



for (let i=1; i<60; i++){
    const box = document.createElement('div')
    box.classList.add('box')
    document.querySelector('.container').appendChild(box)
}


const boxes = document.querySelectorAll('.box')
const scrollTrigger = () =>{
    boxes.forEach(bx => {
        if(bx.offsetTop <= window.scrollY){
            bx.classList.add('active')
        } else {
            bx.classList.remove('active')
        }
    })
}

const randomColor = () => {
    const chars       = '1234567890abcdef'
    const colorLength = 6
    let color         = ''
    for(let i = 1; i<= colorLength; i++){
        const randomColors = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomColors, randomColors+1)
    }
    return `#${color}`
}

const addColor = ()=>{
    randomColorBlock.forEach( e => {
        e.style.background = randomColor()
    })
}



const randomColorBlock = document.querySelectorAll('.box') 
addColor()

window.addEventListener('scroll', scrollTrigger)