const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
function isTriangle() {
  const sumOfangles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfangles === 180) {
    outputEl.innerText = "Yay!,The angles form a triangle";
  } else {
    outputEl.innerText = "Oh Oh! The angles don't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
