class Property {

    constructor(data) {
        this.name = data._attributes.name;
        this.value = {}

        Object.keys(data).forEach(index => {
            if (index === "_attributes") return;

            this.value[index] = data[index]

            if (data[index]._text) {
                this.value[index] = data[index]._text;
            }

            if (data[index].url) {
                this.value[index] = data[index].url;
            }

        })

        if (data._text) {
            if (data._text == "true") {
                this.value = true;
            } else if (data._text == "false") {
                this.value = false;
            } else {
                if (!data._text && this.name === "Text") {
                    this.value = "";
                } else {
                    this.value = data._text;
                }
            }
        }

        if (data.min && data.max) {
            this.value = {min: {x: data.min.X._text, y: data.min.Y._text}, max: {x: data.max.X._text, y: data.max.Y._text}}
        }

        if (data._cdata) this.value = data._cdata
        if (data.url) this.value = data.url._text

    }

}

module.exports = Property;