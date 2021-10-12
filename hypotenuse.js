const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  if (sides[0].value === "" || sides[1].value === "") {
    outputEl.innerText = "Please enter values in the given fields";
  } else if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
    outputEl.innerText = "Enter positive values in the given fields";
  } else {
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
