let chess = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
  let out = '';
  let m = 0;
  for (i = 0; i < chess.length; i++) {
    let arr = chess[i];
    for (let k = 0; k < arr.length; k++) {
      if (m % 2 == 0) {
        out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
      } else {
        out += `<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
      }
      m++;
    }
    m++;
  }
  document.querySelector('#field').innerHTML = out;
  document.querySelectorAll('.chess-block').forEach(function (element) {
    element.onclick = horse;
  });
}

draw();

function horse() {
  let x = this.dataset.x;
  let y = this.dataset.y;
  console.log(x + '' + y);
}
