let randomNum = 1;
let randomArr = [];

function randomize() {
  randomNum = Math.floor(Math.random() * Math.floor(10) + 1);
  return randomNum;
}

function checkNum() {
  if (randomArr.length >= 10) {
    randomNum = 1;
    return randomNum;
  } else if (!randomArr.includes(randomize())) {
    randomArr.push(randomNum);
    return randomNum;
  } else {
    while (randomArr.includes(randomNum)) {
      randomize();
    }
    randomArr.push(randomNum);
    return randomNum;
  }
}

exports.randomize = randomize;
exports.checkNum = checkNum;
