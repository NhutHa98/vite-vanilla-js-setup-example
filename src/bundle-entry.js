// Bundle entry point - auto-detects and imports all JS and SCSS files in bundle folder
// Plus CSS files from other locations
const jsModules = import.meta.glob("./bundle/*.js", { eager: true });
const scssModules = import.meta.glob("./bundle/*.scss", { eager: true });

// Include CSS files from other locations (example: styles folder, components folder, etc.)
const otherCssModules = import.meta.glob(
  [
    "./styles/*.css",
    "./components/*.css",
    "./assets/*.css",
    "./**/*.css", // This will find all CSS files in src and subdirectories
  ],
  { eager: true }
);

// All files are now loaded
console.log(
  `Loaded ${Object.keys(jsModules).length} JS modules:`,
  Object.keys(jsModules)
);
console.log(
  `Loaded ${Object.keys(scssModules).length} SCSS modules:`,
  Object.keys(scssModules)
);
console.log(
  `Loaded ${Object.keys(otherCssModules).length} other CSS modules:`,
  Object.keys(otherCssModules)
);
