const container = document.querySelector(`div[class="container"]`);
const sliderValue = document.getElementById("myRange").value;
let slider = document.getElementById("myRange");
let output = document.getElementById("slider-output");
let clearBtn = document.getElementById("clear");
let colour = "black";
let click = false;


let sliderOutput = () => {
    output.innerHTML = `${slider.value} X ${slider.value}`;
}


slider.oninput = function() {
    output.innerHTML = `${this.value} X ${this.value}`;
}

function Colour(){
    if(click){
        if(colour === "rainbow"){
            this.style.backgroundColor= `#${Math.floor(Math.random()*16777215).toString(16)}`;
        }else{
            this.style.backgroundColor = colour;
        }
    }

}

function changeColour(newCol) {
    colour = newCol;
}

const createGrid = (size) =>{
    container.querySelectorAll("div").forEach(div => div.remove()); // Clear all existing divs
    // Dynamically add new divs
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let new_div = document.createElement("div");
            new_div.style.border = `1px solid gray`;
            new_div.addEventListener("mouseover", Colour);
            new_div.classList.add("grid-item");
            container.appendChild(new_div);
        }
    }
}


const setup = (value) => {
    createGrid(value);
}


function clear () {
    let grid_items = document.querySelectorAll(`div[class="grid-item"]`);
    grid_items.forEach(item => item.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", () => click = !click);



clearBtn.addEventListener("click", clear);
createGrid(sliderValue);
sliderOutput();

