const Property = require("./property");

class Obj {

    constructor(obj) {
        if (!obj._attributes) throw new TypeError("Not a valid object");

        // Set referent and class
        this.class = obj._attributes.class;
        this.ref = obj._attributes.referent;

        // Set properties
        this.properties = []
        
        // Parse properties
        Object.values(obj.Properties).forEach(property => {
            if (property._attributes) {
                this.properties.push(new Property(property));
                return;
            }

            Object.values(property).forEach(property => {
                this.properties.push(new Property(property));
            })
        })

        // Set children
        this.children = [];

    }

    getChildren() {
        return this.children
    }

    getProperty(name) {
        for (var property of this.properties) {
            if (property.name === name) {
                return property.value;
            }
        }
    }

    getDescendants() {
        var descendants = [];

        function iterate(obj) {
            for (var child of obj.children) {
                descendants.push(child);
                iterate(child);
            }
        }       

        iterate(this);
        return descendants;
    }

    getDescendantsByClass(className) {
        var descendants = [];

        function iterate(obj) {
            for (var child of obj.children) {
                if (child.class === className) {
                    descendants.push(child);
                }
                iterate(child);
            }
        }       

        iterate(this);
        return descendants;
    }

    findByReferent(referent) {
        var descendants = this.getDescendants();
        for (var object of descendants) {
            if (object.ref === referent) {
                return object;
            }
        }
    }

    findByClass(className) {
        var descendants = this.getDescendants();
        for (var object of descendants) {
            if (object.class === className) {
                return object;
            }
        }
    }

}

module.exports = Obj;