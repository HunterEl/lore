'use strict';

let defaultList = require('./default_list.json');

module.exports = function() {
    let _phrases = defaultList;
    
    console.getPhrases = function() {
        return _phrases;
    };

    console.tome = function(args) {
        if (!Array.isArray(args) || !args.length) {
            return;
        }

        _phrases = args;
    };

    console.lore = function(arg) {
        let phrase = _phrases[Math.floor(Math.random() * _phrases.length)];
        console.log(phrase + " '"  + JSON.stringify(arg) + "'.");
    };  

    console.resetHistory = function() {
        _phrases = defaultList;
    };

}();
