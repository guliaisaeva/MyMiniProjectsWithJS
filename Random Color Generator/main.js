// variables
const container = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  // create div for colour
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  container.appendChild(colorContainer);
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);

    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
randomColor();
// variable for all color container
const colorDivs = document.querySelectorAll(".color-container");

function generatorColor() {
  colorDivs.forEach((colorDiv) => {
    const newColorCode = randomColor();
    console.log(newColorCode);
    colorDiv.style.backgroundColor = "#" + newColorCode;
    colorDiv.innerText = "#" + newColorCode;
  });
}
generatorColor();
