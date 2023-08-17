// Clearing the input section

function clearInputById(id) {
  const inputElement = document.getElementById(id);
  inputElement.value = "";
}

function calculateTriangleArea() {
  const area =
    parseFloat(document.getElementById("tri-base").value) *
    parseFloat(document.getElementById("tri-height").value) *
    0.5;
  // return area;
  console.log(area);
  clearInputById("tri-base");
  clearInputById("tri-height");
}
function calculateRectangleArea() {
  const area =
    parseFloat(document.getElementById("rect-width").value) *
    parseFloat(document.getElementById("rect-height").value);

  console.log(area);

  clearInputById("rect-width");
  clearInputById("rect-height");
}
function calculateParallelogramArea() {
  const area =
    parseFloat(document.getElementById("para-base").value) *
    parseFloat(document.getElementById("para-height").value);
  console.log(area);

  clearInputById("para-base");
  clearInputById("para-height");
}
