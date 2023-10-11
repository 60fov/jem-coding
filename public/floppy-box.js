const KEY_UP = 0;
const KEY_JUST_UP = 1;
const KEY_DOWN = 2;
const KEY_JUST_DOWN = 3;

const PIPE_SIZE = 100;

const IDLE = 0;
const PLAYING = 1;
const GAME_OVER = 2;

let raf;
let canvas;
let ctx;
let width;
let height;

let last_time = 0;

let box = { x: 0, y: 0, w: 0, h: 0, vx: 0, vy: 0 };
let pipes = [
  // { x: 0, y: 100, gap: 150 },
  // { y: 100, gap: 150 },
  // { y: 100, gap: 150 },
  // ...
];
let world_offset = 0;
let world_speed = 100;
let game_state;
let pipe_spawn_timer = new Timer(spawnPipe, 2);

const input = {
  keys: {
    Space: KEY_UP,
  },
};

function init() {
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  game_state = PLAYING;
  canvas = document.querySelector("#window");
  canvas.width = 800;
  canvas.height = 600;
  ctx = canvas.getContext("2d");

  width = canvas.width;
  height = canvas.height;

  box.width = 40;
  box.height = 40;
  box.x = 30;
  box.y = height / 2;

  pipes = [{ x: width / 2, y: 100, gap: 150 }];

  return true;
}

function run() {
  raf = window.requestAnimationFrame(loop);
}

// time (in ms 153678953478) 16-17
function loop(time) {
  const delta = (time - last_time) / 1000;
  last_time = time;

  update: {
    switch (game_state) {
      case PLAYING:
        {
          // jump
          if (input.keys["Space"] === KEY_JUST_DOWN) {
            const JUMP_IMPULSE = 25000;
            box.vy = -JUMP_IMPULSE * delta;
          }

          // gravity (obvi)
          const GRAVITY = 1000;
          box.vy += GRAVITY * delta;

          // move
          // box.x += box.vx * delta
          world_offset += world_speed * delta;
          box.y += box.vy * delta;

          // pipe stuff
          // create pipe spawn timer
          // if timer spawn pipe
          pipe_spawn_timer.update(delta);

          // collision
          for (let i = 0; i < pipes.length; i++) {
            const pipe = pipes[i];
            const x_offset = pipe.x - world_offset;
            let top_pipe = {
              x: x_offset,
              y: 0,
              width: PIPE_SIZE,
              height: pipe.y,
            };
            let bottom_pipe = {
              x: x_offset,
              y: pipe.y + pipe.gap,
              width: PIPE_SIZE,
              height: height - pipe.y,
            };

            if (
              detectCollision(box, top_pipe) ||
              detectCollision(box, bottom_pipe)
            ) {
              game_state = GAME_OVER;
            }
          }
        }
        break;
      case GAME_OVER:
        {
        }
        break;
      case IDLE:
        {
        }
        break;
    }
  }

  render: {
    ctx.clearRect(0, 0, width, height);

    // drawBox
    ctx.fillStyle = "white";
    ctx.fillRect(box.x, box.y, box.width, box.height);

    // drawPipes
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      const x_offset = pipe.x - world_offset;
      // top pipe
      ctx.fillRect(x_offset, 0, PIPE_SIZE, pipe.y);
      // bottom pipe
      ctx.fillRect(x_offset, pipe.y + pipe.gap, PIPE_SIZE, height - pipe.y);
    }

    // debug
    // ctx.fillText(JSON.stringify(box), 100, 100)
    ctx.fillText(`ms ${(delta * 1000).toFixed(2)}`, 0, height - 20);
    ctx.fillText(`${JSON.stringify(pipes, null, "\t")}`, 0, height - 50);
    ctx.fillText(
      `${JSON.stringify(pipe_spawn_timer.accum(), null, "\t")}`,
      0,
      height - 100
    );
    ctx.fillText(`${game_state}`, 0, height - 35);
  }

  pollInput();
  raf = window.requestAnimationFrame(loop);
}

function spawnPipe() {
  const x = world_offset + width;
  const gap = random.int(150, 250);
  const y = random.int(50, height - gap - 50);
  pipes.push({ x, y, gap });
}

// TODO impl
function removePipe() {}

// TODO use
function destroy() {
  window.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("keyup", onKeyUp);
  window.cancelAnimationFrame(raf);
}

function onKeyDown(e) {
  input.keys[e.code] = KEY_JUST_DOWN;
}

function onKeyUp(e) {
  input.keys[e.code] = KEY_JUST_UP;
}

function pollInput() {
  const keys = Object.keys(input.keys);
  for (let key of keys) {
    if (input.keys[key] % 2 !== 0) input.keys[key]--;
  }
}

// main fn
(() => {
  // TODO start game on keypress
  const initialized = init();
  if (initialized) run();
  // destroy()
})();

// Timer stuff
function Timer(actionFn, interval = 1) {
  let accum = 0;
  let intrvl = interval;
  let run_count = 0;
  let fn = actionFn;
  return {
    update(ms) {
      accum += ms;
      if (accum >= intrvl) {
        accum -= intrvl;
        run_count++;
        fn();
      }
    },
    intrvl() {
      return intrvl;
    },
    accum() {
      return accum;
    },
    reset() {
      accum = 0;
      run_count = 0;
    },
  };
}

const random = {
  int: (min, max) => Math.floor(Math.random() * (max - min) + min),
  float: (min, max) => Math.random() * (max - min) + min,
};

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}
