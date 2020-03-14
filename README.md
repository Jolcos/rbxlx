Parsing .rbxlx files can be difficult to do using NodeJS since there are no libraries currently available for that, until now.

# So what is it?
Simply put, it parses .rbxlx files (**not .rbxl**) in an organised manner. This can be useful if you for some reason want to make some edits to a .rbxlx file and then import those instances.

# How do I use it?
This is a basic example on how to use it:
```js
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
```

# How do I import those instances?
You can use [this module](https://www.roblox.com/library/4778223327/rbxlx), if you want a demo on how to use it then check out [this place](https://www.roblox.com/games/4778333674/rbxlx).

# Feedback
The parser isn't perfect so if you have any general feedback on it or the module then feel free to contact me!