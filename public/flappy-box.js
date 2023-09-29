let raf;
let canvas;
let ctx;
let width;
let height;

let lastTime = 0;

let box = { x: 0, y: 0, w: 0, h: 0, vx: 0, vy: 0 }
let pipes = [
  { x: 0, gap: 0 },
  // ...
]


const KEY_UP = 0
const KEY_JUST_UP = 1
const KEY_DOWN = 2
const KEY_JUST_DOWN = 3

const input = {
  keys: {
    "Space": KEY_UP
  }
}


function init() {
  window.addEventListener("keydown", onKeyDown)
  window.addEventListener("keyup", onKeyUp)

  canvas = document.querySelector("#window")
  canvas.width = 800
  canvas.height = 600
  ctx = canvas.getContext("2d")

  width = canvas.width
  height = canvas.height

  box.w = 40
  box.h = 40
  box.x = 30
  box.y = height / 2

  return true
}

function run() {
  raf = window.requestAnimationFrame(loop)
}

function loop(time) {
  const delta = (time - lastTime) / 1000
  lastTime = time

  update: {
    // jump 
    if (input.keys["Space"] === KEY_JUST_DOWN) {
      const JUMP_IMPULSE = 25000
      box.vy = -JUMP_IMPULSE * delta
    }

    // gravity (obvi)
    const GRAVITY = 1000
    box.vy += GRAVITY * delta

    // move
    box.x += box.vx * delta
    box.y += box.vy * delta

    // collision
    if (box.y > 600) box.y = 600

  }

  render: {
    ctx.clearRect(0, 0, width, height)

    // drawBox
    ctx.fillStyle = "white"
    ctx.fillRect(box.x, box.y, box.w, box.h)

    // drawPipes
    // TODO

    // debug
    // ctx.fillText(JSON.stringify(box), 100, 100)
    ctx.fillText(`ms ${(delta * 1000).toFixed(2)}`, 0, height - 20)
  }

  pollInput()
  raf = window.requestAnimationFrame(loop)
}

// TODO
function destroy() {
  window.removeEventListener("keydown", onKeyDown)
  window.removeEventListener("keyup", onKeyUp)
  window.cancelAnimationFrame(raf)
}

function onKeyDown(e) {
  input.keys[e.code] = KEY_JUST_DOWN
}

function onKeyUp(e) {
  input.keys[e.code] = KEY_JUST_UP
}

function pollInput() {
  const keys = Object.keys(input.keys)
  for (let key of keys) {
    if (input.keys[key] % 2 !== 0) input.keys[key]--
  }
}

// main fn
(() => {
  // TODO start game on keypress
  const initialized = init()
  if (initialized) run()
  // destroy()
})()