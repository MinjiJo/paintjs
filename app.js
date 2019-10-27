const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("controls__color");

const CANVAS_SIZE = 800;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWedth = 2.5;

var painting = false;

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
    console.log("moveTo : " + x + y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
    console.log("lineTo : " + x + y);
  }
}

function handleColor(e) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColor)
);

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
