'use strict';


var expect = require("expect.js"),
    simplator = require("simplator"),

    templates = {
        nameTmpl: simplator.compile("{first},{last}"),
        addressTmpl: simplator.compile("{street},{city}")
    },

    subTemplates = require('../lib/simplator-subtemplates');


describe("simplator_subtemplates", function () {
    var results;
    before(function () {

        subTemplates.use(templates);

        var tmplt = simplator.compile("{name | sub('nameTmpl')}\n{address | sub('addressTmpl') }");

        results = tmplt({
            name: {
                first: "Andrea",
                last: "Parodi"
            },
            address: {
                street: "via Casata",
                city: "Genoa"
            }
        });
    });

    it("is defined", function () {
        expect(subTemplates).to.be.an('object');
    });

    it("work!", function () {
        expect(results).to.be.equal('Andrea,Parodi\nvia Casata,Genoa');
    });
});
