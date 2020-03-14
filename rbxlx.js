const Parser = require("./classes/parser");
const xmljs = require("xml-js");

module.exports = {

    parse: (xml) => {
        return new Promise((resolve, reject) => {

            try {

                var result = xmljs.xml2json(xml, {compact: true, spaces: 4});
                    result = JSON.parse(result);

                // Create parser
                var parser = new Parser(result);

                // Parse
                parser.parse();

                // Get result
                var res = parser.get();

                return resolve(res);

            } catch (err) {
                return reject(err);
            }

        })
    }

}