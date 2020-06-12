function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function twoHits(a, b) {
  var aleft = a.x;
  var aright = a.x + a.width;
  var atop = a.y;
  var abottom = a.y + a.height;
  var bleft = b.x;
  var bright = b.x + b.width;
  var btop = b.y;
  var bbottom = b.y + b.height;
  if (abottom < btop || atop > bbottom || aleft > bright || aright < bleft) {
    return false;
  } else {
    return true;
  }
}