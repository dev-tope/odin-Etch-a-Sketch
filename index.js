const container = document.querySelector('.container-div');
const gridDiv = document.querySelector('.grid-div');
const gridWidth = document.querySelector('.grid-div').clientWidth;
const btnDiv = document.createElement('div')
const btn = document.createElement('button')
const resetBtn = document.createElement('button')
const eraserBtn = document.createElement('button')
const alert = document.querySelector('.alert')
const rainbowBtn = document.createElement('button');


container.appendChild(btnDiv);
btnDiv.classList.add('btn-div')

btnDiv.appendChild(btn);
btn.classList.add ('grid-btn')
btn.innerHTML = "Change Grid";

btnDiv.appendChild(resetBtn);
resetBtn.classList.add ('grid-btn');
resetBtn.innerHTML = "Clear Grid"

btnDiv.appendChild(eraserBtn)
eraserBtn.classList.add ('grid-btn')
eraserBtn.classList.add ('eraser-btn');
eraserBtn.innerHTML = "Eraser";

btnDiv.appendChild(rainbowBtn);
eraserBtn.classList.add ('grid-btn');
rainbowBtn.classList.add('rainbowBtn');
rainbowBtn.innerHTML = 'Rainbow';

rmvBtn = document.querySelector('.eraser-btn')
rbwBtn = document.querySelector('.rainbowBtn')


let box;
let boxes = document.querySelectorAll('.box');
let squareSize = 8;


createGrid(squareSize)




function createBox(size){
    box = document.createElement('div');
    box.classList.add('box');
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
}

function createGrid(gridSize){
    for (let i=0; i < (gridSize**2); i++){
        createBox(gridWidth/gridSize)
        gridDiv.appendChild(box)
    }
}

function reset(){
    while(gridDiv.firstChild){
        gridDiv.removeChild(gridDiv.lastChild)
    }
}

function defaultGrid() {
    createGrid(squareSize)
}

function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
 

function setRandomColor() {
$("#colorpad").css("background-color", getRandomColor());
}


let gridSize
btn.addEventListener('click', ()=> {
    gridSize = parseInt(prompt("Size of grid"))
    if(isNaN(gridSize) || gridSize < 3 || gridSize > 99){
        alert("value should be between 3 - 99")
    } else {
        reset()
        createGrid(gridSize)
    }
})

resetBtn.addEventListener('click', ()=> {
    reset()
    defaultGrid();
})

rmvBtn.addEventListener('click', ()=>{
    rmvBtn.classList.toggle('active')
    if(rmvBtn.classList.contains('active')){
        alert.innerHTML = 'Eraser is active'
    } else {
        alert.innerHTML = ''
    }
})


rbwBtn.addEventListener('click', ()=>{
    rbwBtn.classList.toggle('active')
    if(rbwBtn.classList.contains('active')){
        alert.innerHTML = 'Rainbow effect is active'
    } else {
        alert.innerHTML = ''
    }
})



gridDiv.addEventListener('mouseover', e=> {
    if (rmvBtn.classList.contains('active')) {
        if(e.target.matches('.box')){
            e.target.style.backgroundColor = "white";
        }
    } else if (rbwBtn.classList.contains('active')){
        if(e.target.matches('.box')){
            e.target.style.backgroundColor = `${getRandomColor()}`;
        }  
    } else {
        if(e.target.matches('.box')){
            e.target.style.backgroundColor = "black";
        }
    }
})






