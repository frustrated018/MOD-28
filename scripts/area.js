// Clearing the input section

function clearInputById(id1, id2) {
  const id1Clear = document.getElementById(id1);
  id1Clear.value = "";
  const id2Clear = document.getElementById(id2);
  id2Clear.value = "";
}

// Making a reusable function to get the height and base and other inputs -->
function getInputValue(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

// Function for validation

function validate(area) {
  if (isNaN(area) === true) {
    alert("Please insert a valid number");
    return;
  }
  // else{
  //     console.log(area);  already using console.log inside the individual functions
  // }
}

function calculateTriangleArea() {
  const area = getInputValue("tri-base") * getInputValue("tri-height") * 0.5;
  validate(area);
  console.log(area);
  clearInputById("tri-base", "tri-height");
}
function calculateRectangleArea() {
  const area = getInputValue("rect-width") * getInputValue("rect-height");
  validate(area);
  console.log(area);
  clearInputById("rect-width", "rect-height");
}
function calculateParallelogramArea() {
  const area = getInputValue("para-base") * getInputValue("para-height");
  validate(area);
  console.log(area);
  clearInputById("para-base", "para-height");
}
function calculateRhombusArea() {
  const area = getInputValue("diagonal-1") * getInputValue("diagonal-2") * 0.5;
  validate(area);
  console.log(area);
  clearInputById("diagonal-1", "diagonal-2");
}
function calculatePentagonArea() {
  const area = getInputValue("perimeter") * getInputValue("apothem") * 0.5;
  validate(area);
  console.log(area);
  clearInputById("perimeter", "apothem");
}
function calculateEllipseArea() {
  const area = getInputValue("el-major") * getInputValue("el-minor") * Math.PI;
  validate(area);
  console.log(area.toFixed(3));
  clearInputById("el-major", "el-minor");
}
