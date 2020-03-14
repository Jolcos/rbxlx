const Obj = require("./obj");

class Parser {

    constructor(obj) {
        if (!obj.roblox) throw new TypeError("Not valid roblox xml");
        this.obj = obj.roblox;
        this.game = new Obj({
            Properties: [],
            _attributes: {
                referent: "RBX0", 
                class: "DataModel"
            }
        });
    }
    
    get() {
        return this.game;
    }

    add(obj, parent) {
        if (!obj._attributes) return;
        if (!parent) parent = this.game;

        var object = new Obj(obj);
        parent.children.push(object);

        this.parse(obj, object);
    }

    parse(o, parent) {
        if (!o) o = this.obj;
        if (!o.Item) return;
        
        if (!o.Item.length) {
            this.add(o.Item, parent);
            return;
        }

        o.Item.forEach(item => {
            this.add(item, parent);
        })

    }

}

module.exports = Parser;