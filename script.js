const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");

    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });

    container.appendChild(square);
}