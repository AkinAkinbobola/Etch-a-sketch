const container = document.querySelector(`div[class="container"]`);


const sliderValue = document.getElementById("myRange").value;
container.setAttribute("style", `grid-template-columns: repeat(${sliderValue}, 1fr);        grid-template-rows: repeat(${sliderValue}, 1fr);`);
for(let i =0; i < sliderValue; i ++){
    for(let j =0; j< sliderValue; j++){
        new_div = document.createElement("div");
        new_div.classList.add("grid-item");
        new_div.setAttribute("style", "border: 1px grey solid");
        container.appendChild(new_div);
    }
}

const grid_items = document.querySelectorAll(`div[class="grid-item"]`);

grid_items.forEach(item => item.addEventListener("mouseover", (e)=>{
    console.log(item);
    item.classList.add("new-color");
}));

let slider = document.getElementById("myRange");
let output = document.getElementById("slider-output");
output.innerHTML = `${slider.value} X ${slider.value}`; // Display the default slider value


slider.oninput = function() {
  output.innerHTML = `${this.value} X ${this.value}`;
}