Parsing .rbxlx files can be difficult to do using NodeJS since there are no libraries currently available for that, until now.

# So what is it?
Simply put, it parses .rbxlx files (**not .rbxl**) in an organised manner. This can be useful in many ways and I personally use it to convert the files to objects where I then can for example find all the scripts with a specific name.

There are of course many others ways you can use this and one is for example importing a place file, changing the Color3 of all frames to something that you retrieved from an api and then importing it back to Roblox.

# What does parsing mean?
It simply means that we break down the file into a more user friendly structure that is easier to work with than traditional xml files.

# How do I use it?
This is a basic example on how to use it, in this case we parse a .rbxlx file and then output every Part in that file.
```js
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
```
It is available on npm as well as on github:
https://www.npmjs.com/package/rbxlx
https://github.com/Jolcos/rbxlx

# How do I import those instances?
You can use [this module](https://www.roblox.com/library/4778223327/rbxlx), if you want a demo on how to use it then check out [this place](https://www.roblox.com/games/4778333674/rbxlx).

# Feedback
The parser isn't perfect so if you have any general feedback on it or the module then feel free to contact me!