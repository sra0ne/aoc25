const fs = require("fs");

const data = fs.readFileSync("input1.txt", "utf-8");
const lines = data.split("\n");

let dial = 50;
let ans = 0;

lines.forEach((line) => {
  const direction = line[0];
  const value = parseInt(line.slice(1), 10);
  for (let i = 0; i < value; i++) {
    if (direction === "R") {
      dial++;
    } else {
      dial--;
    }
    if (dial >= 100) {
      dial = 0;
    } else if (dial < 0) {
      dial = 99;
    }

    if (dial === 0) {
      ans++;
    }
  }
});

console.log(ans);
