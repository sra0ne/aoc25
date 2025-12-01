const fs = require("fs");

const data = fs.readFileSync("input1.txt", "utf-8");
const lines = data.split("\n");

let dial = 50;
let ans = 0;

lines.forEach((line) => {
  const direction = line[0];
  const value = parseInt(line.slice(1), 10);

  if (direction === "R") {
    dial = dial + value;
  } else {
    dial = dial - value;
  }
  while (!(dial >= 0 && dial <= 99)) {
    if (dial >= 100) {
      dial = dial - 100;
    } else if (dial < 0) {
      dial = dial + 100;
    }
  }
  if (dial == 0) {
    ans++;
  }
});

console.log(ans);
