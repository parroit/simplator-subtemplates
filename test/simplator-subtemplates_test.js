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

    });

    it("is defined", function () {
        expect(subTemplates).to.be.an('object');
    });

    describe("object context", function () {
        before(function () {


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



        it("work!", function () {
            expect(results).to.be.equal('Andrea,Parodi\nvia Casata,Genoa');
        });
    });


    describe("array context", function () {
        before(function () {


            var tmplt = simplator.compile("{name | sub('nameTmpl')}\n{addresses | subEach('addressTmpl','\t') }");

            results = tmplt({
                name: {
                    first: "Andrea",
                    last: "Parodi"
                },
                addresses: [{
                    street: "via Casata",
                    city: "Genoa"
                },{
                    street: "Another address",
                    city: "Roma"
                }]
            });
        });



        it("work!", function () {
            expect(results).to.be.equal('Andrea,Parodi\nvia Casata,Genoa\tAnother address,Roma');
        });
    });
});
