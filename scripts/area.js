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
// Adding to calculation entry
function addToCalculationEntry(entryName, value) {
  const entryPoint = document.getElementById("calculation-entry");
  const entry = document.createElement("div");
  entry.className = "flex gap-3 items-center justify-evenly my-4";
  entry.innerHTML = `<p class = "text-neutral-700 text-base font-normal">
    ${
      entryPoint.childElementCount + 1
    }. ${entryName} <span id = "cm-value">${value} cm</span><sup>2</sup></p>
    <button id="btn-convert" onclick="convert(${value})"class=" w-24 h-8 bg-sky-600 rounded text-xs text-white">Convert to m<sup>2</sup></button>`;
  entryPoint.appendChild(entry);
  if(convertBtn){
      convertBtn.removeEventListener('click', convert);
    }
   let convertBtn = document.getElementById("btn-convert");
  convertBtn.addEventListener('click', convert);
}
// convert button function
function convert(valueInCm) {
//   const valueInCm = parseFloat(document.getElementById("cm-value").innerText);
   const valueInM = Math.pow(valueInCm, 2);
   const cmValueSpan = document.getElementById("cm-value");
   cmValueSpan.innerText= `${valueInM} m`;
   return;
}

/************************* Triangle **************************/
function calculateTriangleArea() {
  const area = getInputValue("tri-base") * getInputValue("tri-height") * 0.5;
  clearInputById("tri-base", "tri-height");
  validate(area);
  addToCalculationEntry("Triangle", area);
}
/************************* Rectangle **************************/
function calculateRectangleArea() {
  const area = getInputValue("rect-width") * getInputValue("rect-height");
  clearInputById("rect-width", "rect-height");
  validate(area);
  addToCalculationEntry("Rectangle", area);
}
/************************* Parallelogram **************************/
function calculateParallelogramArea() {
  const area = getInputValue("para-base") * getInputValue("para-height");
  clearInputById("para-base", "para-height");
  validate(area);
  addToCalculationEntry("Parallelogram", area);
}
/************************* Rhombus **************************/
function calculateRhombusArea() {
  const area = getInputValue("diagonal-1") * getInputValue("diagonal-2") * 0.5;
  clearInputById("diagonal-1", "diagonal-2");
  validate(area);
  addToCalculationEntry("Rombus", area);
}
/************************* Pentagon **************************/
function calculatePentagonArea() {
  const area = getInputValue("perimeter") * getInputValue("apothem") * 0.5;
  clearInputById("perimeter", "apothem");
  validate(area);
  addToCalculationEntry("Pentagon", area);
}
/************************* Ellipse **************************/
function calculateEllipseArea() {
  const area = getInputValue("el-major") * getInputValue("el-minor") * Math.PI;
  clearInputById("el-major", "el-minor");
  validate(area);
  addToCalculationEntry("Ellipse", area.toFixed(3));
}
