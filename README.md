# simplator-subtemplates [![Build Status](https://secure.travis-ci.org/parroit/simplator-subtemplates.png?branch=master)](http://travis-ci.org/parroit/simplator-subtemplates)  [![Npm module](https://badge.fury.io/js/simplator-subtemplates.png)](https://npmjs.org/package/simplator-subtemplates) [![Code Climate](https://codeclimate.com/github/parroit/simplator-subtemplates.png)](https://codeclimate.com/github/parroit/simplator-subtemplates)

Simplator filters to run sub-templates.
Allow simplator to run sub-templates


## Getting Started
Install the module with: `npm install simplator-subtemplates --save`

```javascript

var fs =require("fs"),
    simplator = require("simplator"),

    templates = {
        nameTmpl:  simplator.compile("{first},{last}"),
        addressTmpl:  simplator.compile("{street},{city}")
    },

    subTemplates = require('simplator-subtemplates');

subTemplates.use(templates);

var tmplt = simplator.compile("{name | sub('nameTmpl')}\n{address | sub('addressTmpl') }"),

    results = tmplt({
        name:{
            first: "Andrea",
            last: "Parodi"
        },
        address: {
            street: "via Casata",
            city: "Genoa"
        }
    });
```

Results will contains "Andrea,Parodi\nvia Casata,Genoa"


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.


## License
Copyright (c) 2013 parroit  
Licensed under the MIT license.
