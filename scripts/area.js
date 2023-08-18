// Clearing the input section

function clearInputById(id) {
  const inputElement = document.getElementById(id);
  inputElement.value = "";
}

// Making a reusable function to get the height and base -->
function getInputValue(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

function calculateTriangleArea() {
  const area = getInputValue("tri-base") * getInputValue("tri-height") * 0.5;
  // return area;
  console.log(area);
  clearInputById("tri-base");
  clearInputById("tri-height");
}
function calculateRectangleArea() {
  const area = getInputValue("rect-width") * getInputValue("rect-height");
  console.log(area);

  clearInputById("rect-width");
  clearInputById("rect-height");
}
function calculateParallelogramArea() {
  const area = getInputValue("para-base") * getInputValue("para-height");
  console.log(area);

  clearInputById("para-base");
  clearInputById("para-height");
}
function calculateRhombusArea() {
  const area = getInputValue("diagonal-1") * getInputValue("diagonal-2");
  console.log(area);

  clearInputById("diagonal-1");
  clearInputById("diagonal-2");
}
