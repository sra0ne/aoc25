const fs = require("fs");
let grid = fs
  .readFileSync("input1.txt", "utf-8")
  .trim()
  .split(/\r?\n/)
  .map((row) => row.split(""));
let total = 0;
let end = false;
while (!end) {
  end = true;
  let remove = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == "@") {
        let sum = 0;
        const adj = [
          grid[r - 1]?.[c - 1],
          grid[r - 1]?.[c],
          grid[r - 1]?.[c + 1],
          grid[r]?.[c - 1],
          grid[r]?.[c + 1],
          grid[r + 1]?.[c - 1],
          grid[r + 1]?.[c],
          grid[r + 1]?.[c + 1],
        ];
        for (let i = 0; i < adj.length; i++) {
          if (adj[i] == "@") {
            sum++;
            if (sum == 4) break;
          }
        }
        if (sum < 4) {
          remove.push([r, c]);
        }
      }
    }
  }
  if (remove.length > 0) {
    end = false;
    total += remove.length;
    for (let i = 0; i < remove.length; i++) {
      const [r, c] = remove[i];
      grid[r][c] = ".";
    }
  }
}
console.log(total);
