// Clearing the input section

function clearInputById(id) {
  const inputElement = document.getElementById(id);
  inputElement.value = "";
}

// Making a reusable function to get the height and base -->
function getValue(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function calculateTriangleArea() {
  const area = getValue('tri-base') * getValue('tri-height')  *  0.5;
  // return area;
  console.log(area);
  clearInputById("tri-base");
  clearInputById("tri-height");
}
function calculateRectangleArea() {
  const area = getValue('rect-width') * getValue('rect-height');
  console.log(area);

  clearInputById("rect-width");
  clearInputById("rect-height");
}
function calculateParallelogramArea() {
  const area = getValue('para-base') * getValue('para-height');
  console.log(area);

  clearInputById("para-base");
  clearInputById("para-height");
}
