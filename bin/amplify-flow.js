#!/usr/bin/env node

const open = require("open");
const path = require("path");

(async () => {
  try {
    const appPath = path.resolve(
      path.dirname(__filename),
      "../dist/Amplify Flow-darwin-x64/Amplify Flow.app"
    );

    console.info("Opening", appPath, "...");
    await open(appPath);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
