const canvas = document.getElementById("jsCanvas");

var painting = false;

//그림 그리는 것을 멈출 때
function stopPainting() {
  painting = false;
}

//마우스가 움직일 때 캔버스 위의 위치
function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
}

//마우스를 눌렀을 때 그림 그리는 기능 true
function onMouseDown(e) {
  painting = true;
}

//마우스에서 손을 땠을 때 painting = false
function onMouseUp(e) {
  stopPainting;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
