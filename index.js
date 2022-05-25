const container = document.querySelector(`div[class="container"]`);
const sliderValue = document.getElementById("myRange").value;
let slider = document.getElementById("myRange");
let output = document.getElementById("slider-output");

let sliderOutput = () => {
    output.innerHTML = `${slider.value} X ${slider.value}`;
}
sliderOutput();

slider.oninput = function() {
    output.innerHTML = `${this.value} X ${this.value}`;
}


const createGrid = (size) =>{
    container.querySelectorAll("div").forEach(div => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let new_div = document.createElement("div");
            new_div.style.border = `1px solid gray`;
            new_div.classList.add("grid-item");
            container.appendChild(new_div);
        }
    }
}

createGrid(sliderValue);

const setUp = (value) =>{
    createGrid(value);
}



const grid_items = document.querySelectorAll(`div[class="grid-item"]`);

grid_items.forEach(item => item.addEventListener("mouseover", (e)=>{
    item.classList.add("new-color");
}));

