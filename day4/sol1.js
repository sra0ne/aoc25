const fs = require("fs");
const grid = fs.readFileSync("input1.txt", "utf-8").split(/\r?\n/);
let rolls = 0;
for (r = 0; r < grid.length; r++) {
  for (c = 0; c < grid[0].length; c++) {
    let sum = 0;
    if (grid[r][c] == "@") {
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
    }
    if (sum < 4 && grid[r][c] == "@") {
      rolls++;
    }
  }
}
console.log(rolls);
