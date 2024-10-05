let gridSize = 16;
let boxNumber = 1;

createGrid(gridSize);
const button = document.querySelector(".button");

button.addEventListener("click", () =>{
    const container = document.querySelector(".container");
    gridSize = prompt("Enter Grid Size (Max: 100)");
    console.log(gridSize);
    if(gridSize <= 100 && gridSize > 0){
        container.remove();
        createGrid(gridSize);
    }
    else{
        alert("Invalid Grid Size :[")
    }
});

function createGrid(size){
    const createContainer = document.createElement("div");
    createContainer.classList.add("container");
    
    const body = document.querySelector("body");
    body.appendChild(createContainer);
    
    const container = document.querySelector(".container");
    
    for(let i = 0; i < gridSize; i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add(`row`);
        rowDiv.setAttribute("id", i);
        container.appendChild(rowDiv);
    }
    
    const rows = document.querySelectorAll(".row")
    
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < gridSize; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute("id", boxNumber);
            rows[i].appendChild(box);
            boxNumber++;
        }
    }

    container.addEventListener("mousemove", (e) =>{
        let target = e.target;
        if(isLeftClickHeld && target.classList.contains("box")){
            target.style.background = "black";
        }
    });
}



let isLeftClickHeld = false;

// container.addEventListener("mousedown", (e) =>{
//     if(e.button === 0){
//         isLeftClickHeld = true;
//         console.log("Button held");
//     }
// });

document.body.onmousedown = () => {
    isLeftClickHeld = true;
    console.log("Left click held");
}
document.body.onmouseup = () =>{
    isLeftClickHeld = false;
    console.log("Left click unheld")
};

const container = document.querySelector(".container");

container.addEventListener("mousemove", (e) =>{
    let target = e.target;
    if(isLeftClickHeld && target.classList.contains("box")){
        target.style.background = "black";
    }
});



// container.addEventListener("mouseup", (e) =>{
//     if(e.button === 0){
//         isLeftClickHeld = false;
//         console.log("Button released");
//     }
// });

// container.addEventListener("mouseleave", () =>{
//     isLeftClickHeld = false;
//     console.log("Button released");
// });

// document.addEventListener("mouseup", () =>{
//     isLeftClickHeld = false;
// })