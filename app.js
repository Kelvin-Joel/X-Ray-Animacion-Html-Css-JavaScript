let list=document.getElementById('select')
let img=document.getElementById('img-select')
let container=document.getElementById('container')
let item=document.getElementById('items')

list.addEventListener('change',e=>{
    let valor=e.target.value
    switch (valor) {
        case 'Html':
            img.setAttribute('src','imagenes/HTML.PNG')
            break;
        case 'JavaScript':
            img.setAttribute('src','imagenes/JAVASCRIPT.PNG')
            break;
        default:
            break;
    }
})

container.addEventListener('mousemove',e=>{
    let posicionX=e.offsetX
    let posicionY=e.offsetY
    item.style.clipPath = `circle(60px at ${posicionX}px ${posicionY}px)`;
})
