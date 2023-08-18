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
  console.log(entryName, value);
  const entryPoint = document.getElementById("calculation-entry");
  const entry = document.createElement("div");
  entry.className = "flex items-center gap-3 my-4 justify-evenly";
  entry.innerHTML = `<p class="text-neutral-700 text-base font-normal">
      ${
        entryPoint.childElementCount + 1
      }. ${entryName} <span id="cm-value">${value}</span>cm<sup>2</sup></p>
      <button class="w-24 h-8 bg-sky-600 rounded text-xs text-white" onclick="convert(event)"><span>Convert to m<sup>2</sup></span></button>`;
  entryPoint.appendChild(entry);
}

// Convert button function
function convert(event) {
  let parent;
  if (event.target.tagName == "SPAN") {
    parent = event.target.parentElement.parentElement;
  } else {
    parent = event.target.parentElement;
  }

  if (parent.classList.contains("used")) return alert("Already used");

  const valueInCm = parseFloat(parent.querySelector("#cm-value").innerText);
  const valueInM = (valueInCm / 10000).toFixed(4);
  parent.querySelector("#cm-value").innerText = `${valueInM}`;

  parent.classList.add("used");
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
  validate(area);
  clearInputById("el-major", "el-minor");
  addToCalculationEntry("Ellipse", area.toFixed(3));
}
