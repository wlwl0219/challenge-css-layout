function bottomMove() {
  const bottom = document.querySelector('.bottom__animation');
  const span = bottom.querySelector('span');

  let pos = -2000;
  setInterval(frame, 30);
  function frame() {
    if (pos === 0) {
      pos = -5000;
    }
    pos++;
    bottom.style.left = pos + 'px';
  }
  setInterval(makeSpan, 10000);
  function makeSpan() {
    let newSpan = document.createElement('span');
    newSpan.innerText = span.innerText;
    bottom.appendChild(newSpan);
    console.log(newSpan);
  }
}

function topMove() {
  const top = document.querySelector('.top__animation');
  const span = top.querySelector('span');

  let pos = 0;
  setInterval(frame, 30);
  function frame() {
    pos++;
    top.style.right = pos + 'px';
  }
  setInterval(makeSpan, 10000);
  function makeSpan() {
    let newSpan = document.createElement('span');
    newSpan.innerText = span.innerText;
    top.appendChild(newSpan);
    console.log(newSpan);
  }
}
function init() {
  topMove();
  bottomMove();
}
init();
