console.log("Part 1 loaded");

function part1Function() {
  console.log("Counter setup complete");
  return "Part 1 executed";
}

// Make it globally available
window.part1Function = part1Function;
