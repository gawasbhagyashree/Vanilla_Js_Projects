const hex = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const btn = document.getElementById("btn");
const colorTxt = document.querySelector(".color");

btn.addEventListener("click", function() {
  // console.log(generateRandom())
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[generateRandom()]
  }
  console.log(hexColor)
  document.body.style.backgroundColor = hexColor
  colorTxt.textContent = hexColor
})


function generateRandom() {
  return (
    Math.floor(Math.random() * hex.length)
  )
}