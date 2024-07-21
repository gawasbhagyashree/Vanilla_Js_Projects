const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colorTxt = document.querySelector(".color");

btn.addEventListener('click', function() {
  const randomNum = getRandomNumber();
  console.log(randomNum)

  document.body.style.backgroundColor = colors[randomNum]
  colorTxt.textContent = colors[randomNum]
  colorTxt.style.color = colors[randomNum]
})

function getRandomNumber() {
  return (
    Math.floor(Math.random() * colors.length)

    // it is Math.floor (....). NOT Math.floor*(....)//
  )
}