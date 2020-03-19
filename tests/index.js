const rbxlx = require("../index.js");
const util = require("util");
const path = require("path");
const fs = require("fs");

rbxlx.parse(fs.readFileSync(path.join(__dirname, "test.rbxlx")))
.then(tree => {
    console.log("Parsed file!");

    var descendants = tree.getDescendants();
    for (var object of descendants) {
        if (object.class == "Part") {
            console.log("We found a Part named", object.getProperty("Name"));
        }
    }

    // You can also output the entire tree structure
    //console.log(util.inspect(tree, {depth: Infinity, colors: true}));
})
.catch(err => {
    console.log(`Could not parse file because: ${err.message}`);
})