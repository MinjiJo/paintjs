const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__color");
const range = document.getElementById("jsRange");
const btn = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 800;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

var painting = false;
var filling = false;

//paint 시작할 때
function startPainting() {
  painting = true;
}

//그림 그리는 것을 멈출 때
function stopPainting() {
  painting = false;
}

//마우스가 움직일 때 캔버스 위의 위치
function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

//컬러 select
function handleColor(e) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

//라인 width select
function handleRangeChange(e) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

//fill과 paint를 교차하는 버튼 클릭시
function handleBtnClick(e) {
  if (filling == true) {
    filling = false;
    btn.innerHTML = "Fill";
  } else {
    filling = true;
    btn.innerHTML = "Paint";
  }
}

//fillRect()는 사각형으로 어느 정도의 크기를 나타낼지 정해줌
function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColor)
);

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (btn) {
  btn.addEventListener("click", handleBtnClick);
}
