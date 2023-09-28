let canvas;
let ctx;
let width;
let height;

function init() {
  canvas = document.querySelector("#window")
  canvas.width = 800
  canvas.height = 600
  ctx = canvas.getContext("2d")

  width = canvas.width;
  height = canvas.height;
  
  return true
}

function run() {
  window.requestAnimationFrame(loop)
}

function loop(time) {
  ctx.clearRect(0, 0, width, height)
  ctx.fillRect(0, 0, width, height)
  ctx.strokeRect(100, 100, 100, 100)
  window.requestAnimationFrame(loop)
}

function destroy() { }

// main fn
(() => {
  const initialized = init()
  if (initialized) run()
  destroy()
})()