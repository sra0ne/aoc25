const fs = require("fs");
const lines = fs.readFileSync("input1.txt", "utf-8").split(/\r?\n/);
let total = 0;
lines.forEach((line) => {
  const nums = line.split("").map(Number);
  let best = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let first = nums[i];
    let second = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > second) {
        second = nums[j];
      }
    }
    const val = parseInt(first.toString() + second.toString());
    if (val > best) {
      best = val;
    }
  }
  total += best;
});

console.log(total);
