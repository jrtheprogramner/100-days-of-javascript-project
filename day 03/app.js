const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
const brushSize = document.getElementById("brushSize");

brushSize.addEventListener("input", () => {
  ctx.lineWidth = brushSize.value;
});

const brushColor = document.getElementById("brushColor");

brushColor.addEventListener("input", () => {
  ctx.strokeStyle = brushColor.value;
});
const eraserButton = document.getElementById("eraser");

eraserButton.addEventListener("click", () => {
  ctx.strokeStyle = "#ffffff";
});

const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");
const downloadLink = document.getElementById("downloadLink");

saveButton.addEventListener("click", () => {
  downloadLink.href = canvas.toDataURL("image/png");
  downloadLink.download = "painting.png";
  downloadLink.click();
});

loadButton.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);

  
});

