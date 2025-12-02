const fs = require("fs");
const data = fs.readFileSync("input1.txt", "utf-8");
const lines = data.split(",");
const invalids = [];
let sum = 0;
lines.forEach((line) => {
  line = line.split("-");
  const r1 = parseInt(line[0]);
  const r2 = parseInt(line[1]);

  for (let i = r1; i <= r2; i++) {
    const left = i.toString().slice(0, i.toString().length / 2);
    const right = i.toString().slice(i.toString().length / 2);
    if (left === right) {
      invalids.push(i);
    }
  }
});

for (let i = 0; i < invalids.length; i++) {
  sum += invalids[i];
}
console.log(sum);
