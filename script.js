var time = 5;
var score = 0;
var hitnum = 0;
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 152; i++) {
    var rd = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rd}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function setTime() {
  var timeInt = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timervalue").textContent = time;
    } else {
      clearInterval(timeInt);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over Your Score is ${score}<br><span>For Again Play Refresh the Page</span></h1>`;
    }
  }, 1000);
}
function hitValue() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitnum;
}

function scoreIncrease() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitnum) {
    scoreIncrease();
    makeBubble();
    hitValue();
  }
});
makeBubble();
setTime();
hitValue();
// scoreIncrease();
