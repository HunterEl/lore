'use strict';

module.exports = function() {
    let _phrases = [
        "They will sing songs about us, they will climb to the mountain tops and say",
        "The warrior stood above the fallen necromancer, sword drawn, and yelled",
        "The trifling gnome stood before the beautiful princess and hissed",
        "Brave, noble, and true. We are are heroes, but some might say we are",
        "After claiming his reward, the knight looked down among the peasants and shouted"
    ];

    console.tome = function(args) {
        if (!Array.isArray(args) || !args.length) {
            return;
        }

        _phrases = args;
    }

    console.lore = function(arg) {
        let phrase = _phrases[Math.floor(Math.random() * _phrases.length)];
        JSON.stringify()
        console.log(phrase + " '"  + JSON.stringify(arg) + "'.");
    };  
}();
