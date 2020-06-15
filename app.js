const button = document.querySelector("button");
const color = document.querySelector("#color");
const colorGen = document.querySelector("h4");

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
button.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; ++i) {
    hexColor += colors[colorGenerator()];
  }

  colorGen.textContent = hexColor;
  color.style.background = hexColor;
});

colorGen.addEventListener("click", (e) => {
  console.log(e);
});

const colorGenerator = () => {
  return Math.floor(Math.random() * colors.length);
};
