let colors = document.querySelectorAll('.color')
let colorPalette = document.getElementById('color-palette')
let input = document.getElementById('board-size')
let vqv = document.getElementById('generate-board')
let clear = document.getElementById('clear-board')
let pixelBoard = document.querySelector('#pixel-board')
let pixel = document.querySelectorAll('.pixel')
console.log(input.value)

vqv.addEventListener('click', addPixel)
clear.addEventListener('click',clearBoard)
pixelBoard.addEventListener('click', selectPixel)
colors[0].addEventListener('click', selectColor)
colors[1].addEventListener('click', selectColor)
colors[2].addEventListener('click', selectColor)
colors[3].addEventListener('click', selectColor)

window.onload = function(){
    colors[0].style.backgroundColor = 'black'
    for(let i = 1; i < 4; i++){
        let color1 = parseInt(Math.random()*255)
        let color2 = parseInt(Math.random()*255)
        let color3 = parseInt(Math.random()*255)
        colors[i].style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")"
    }

    pixelBoard.style.width = '210px'
    for(let i = 0; i < 25;i++){
        let pixel = document.createElement('div')
        pixel.style.width = '40px'
        pixel.style.height = '40px'
        pixel.className = 'pixel'
        pixelBoard.appendChild(pixel)
    }
}

function selectColor(event){
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    event.target.classList.add('selected')
}

function selectPixel(event){
    let color = document.querySelector('.selected').style.backgroundColor
    event.target.style.backgroundColor = color
}

function clearBoard(){
    let pixel = document.querySelectorAll('.pixel')
    for(let i = 0; i < pixel.length; i++){
        pixel[i].style.backgroundColor = 'white'
    }
}



function addPixel(){
    

    if(input.value === "" ){
        window.alert('Board inválido!')
    }
    else if(input.value < 5 ){
        pixelBoard.style.width = '210px'
        
    }
    else if(input.value > 50 ){
        pixelBoard.style.width = 2100 + 'px'
        console.log(pixelBoard.style.width)
        for(let i = 0; i < 2475;i++){
            let pixel = document.createElement('div')
            pixel.style.width = '40px'
            pixel.style.height = '40px'
            pixel.className = 'pixel'
            pixelBoard.appendChild(pixel)
        }
    }
    
    else{
        pixelBoard.style.width = input.value * 40 + input.value * 2 + 'px'
        pixelBoard.style.height = input.value * 40 + input.value * 2 + 'px'
        for(let i = 0; i < (input.value ** 2 - 25);i++){
            let pixel = document.createElement('div')
            pixel.style.width = '40px'
            pixel.style.height = '40px'
            pixel.className = 'pixel'
            pixelBoard.appendChild(pixel)
        }
    }
    
}
