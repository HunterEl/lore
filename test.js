'use strict';

var assert = require('assert');
require('./index.js');

describe('Lore Test', function() {
    beforeEach(function() {
        console.resetHistory();
    });

    it('is able to set different prefixes', function(done) {
        let newPrefixList = ["hey there", "hi there", "hello there"];
        console.tome(newPrefixList);
        assert.equal(console.getPhrases(), newPrefixList);
        done();
    });

    it('will reject a non-arrays for prefixes', function(done) {
        let baseList = console.getPhrases();
        let badPrefixList = {
            didWeGetEmChat: "nope"
        };
        console.tome(badPrefixList);
        assert.equal(console.getPhrases(), baseList);
        done();
    });
});
