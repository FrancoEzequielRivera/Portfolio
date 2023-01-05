console.log("Hola mundo!");


const ir_arriba = document.getElementById('arriba')

ir_arriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.onscroll = () => {
    if (window.scrollY > 0)
    {
        ir_arriba.style.display = "inline-block"
        ir_arriba.style.opacity = "1"
    }
    else
    {
        ir_arriba.style.opacity = "0"
        setTimeout(() =>{
            ir_arriba.style.display = "none";
        },300)
    }
}