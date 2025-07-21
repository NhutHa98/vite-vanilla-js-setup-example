console.log("Part 2 loaded");

function part2Function() {
  console.log("Counter setup complete");
  return "Part 2 executed";
}

// Make it globally available
window.part2Function = part2Function;
