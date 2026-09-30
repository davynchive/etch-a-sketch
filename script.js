const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resizeButton");

function createGrid(size) {
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";

        square.addEventListener("mouseenter", () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);

            if (square.dataset.red) {
                red = Number(square.dataset.red) * 0.9;
                green = Number(square.dataset.green) * 0.9;
                blue = Number(square.dataset.blue) * 0.9;
            }

            square.dataset.red = red;
            square.dataset.green = green;
            square.dataset.blue = blue;

            square.style.backgroundColor =
                "rgb(" + red + ", " + green + ", " + blue + ")";
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