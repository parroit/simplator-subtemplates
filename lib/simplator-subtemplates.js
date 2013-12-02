/*
 * simplator-subtemplates
 * https://github.com/parroit/simplator-subtemplates
 *
 * Copyright (c) 2013 parroit
 * Licensed under the MIT license.
 */

'use strict';

var simplator = require("simplator"),
    _templates = {};

simplator.filter("sub",function(value,templateName){
    return _templates[templateName](value);
});


exports.use = function(templates){
    _templates = templates;
};
