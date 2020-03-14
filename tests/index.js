const rbxlx = require("../index.js");
const util = require("util");
const path = require("path");
const fs = require("fs");

rbxlx.parse(fs.readFileSync(path.join(__dirname, "test.rbxlx")))
.then(tree => {
    console.log("Parsed file!");
    console.log(util.inspect(tree, {depth: Infinity, colors: true}));
})
.catch(err => {
    console.log(`Could not parse file because: ${err.message}`);
})