let colors = document.querySelectorAll('.color')
let colorPalette = document.getElementById('color-palette')
let input = document.getElementById('board-size')
let vqv = document.getElementById('generate-board')
console.log(colors)

window.onload = function(){
    colors[0].style.backgroundColor = 'black'
    for(let i = 1; i < 4; i++){
        let color1 = parseInt(Math.random()*255)
        let color2 = parseInt(Math.random()*255)
        let color3 = parseInt(Math.random()*255)
        colors[i].style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")"
    }
    
}



colors[0].addEventListener('click', selectColor)
colors[1].addEventListener('click', selectColor)
colors[2].addEventListener('click', selectColor)
colors[3].addEventListener('click', selectColor)

function selectColor(event){
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    event.target.classList.add('selected')


}



vqv.addEventListener('click', addPixel)












function addPixel(){

    if(input.value < 5 || input.value > 50){
        for(let i = 0; i < 5;i++){
            let pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixelBoard.appendChild(pixel)
        }
    }
    else{
        for(let i = 0; i < input.value;i++){
            let pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixelBoard.appendChild(pixel)
        }
    }
    
}
