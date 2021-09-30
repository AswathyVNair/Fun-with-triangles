const sides = document.querySelectorAll(".side-input");
const CheckAreaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(base, height) {
  const triangleArea = (base * height) / 2;
  return triangleArea;
}

function checkArea() {
  const triangleArea = calculateArea(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  outputEl.innerText = "Area of triangle is " + triangleArea + "cm²";
}

CheckAreaBtn.addEventListener("click", checkArea);
