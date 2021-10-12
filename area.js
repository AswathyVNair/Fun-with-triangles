const sides = document.querySelectorAll(".side-input");
const checkAreaBtn = document.querySelector("#area-btn");
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

  if (sides[0].value === "" || sides[1].value === "") {
    outputEl.innerText = "Please enter values in the given fields";
  } else if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
    outputEl.innerText = "Enter positive values in the given fields";
  } else {
    outputEl.innerText = "Area of triangle is " + triangleArea + "cm²";
  }
}

checkAreaBtn.addEventListener("click", checkArea);
