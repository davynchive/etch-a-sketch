const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resizeButton");

function createGrid(size) {
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

createGrid(16);

resizeButton.addEventListener("click", () => {
    const size = prompt("Enter the number of squares per side:");

    if (size < 1 || size > 100 || isNaN(size)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    container.innerHTML = "";

    createGrid(size);
});