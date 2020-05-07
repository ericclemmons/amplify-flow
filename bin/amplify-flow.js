#!/usr/bin/env node

const open = require("open");
const path = require("path");

(async () => {
  try {
    await open(
      path.resolve(
        __dirname,
        "../dist/Amplify Flow-darwin-x64/Amplify Flow.app"
      )
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
