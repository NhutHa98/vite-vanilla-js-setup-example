// Bundle index - imports both parts (legacy style)
import "./part-1.js";
import "./part-2.js";

// Initialize both parts using global functions
if (window.part1Function) {
  window.part1Function();
}

if (window.part2Function) {
  window.part2Function();
}
