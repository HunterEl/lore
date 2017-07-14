# lore
They will sing songs about us... 🐉 ⚔ 💀

# What Is this?
It's a way spice up printing. Tell a tale while debugging.

# Why In The World Would I Use This?
That's a great question. I'm not too sure. Maybe you are like me, and looking at `console.log`s was no longer fun. 

# How Do I Use This Garbage Library?
Run `npm i -D lore-console` in whatever project you want to use it in. Or `npm i -g lore-console` for global usage.


The general `gist` (lmao) is this:
```javascript
require('lore-console'); // this will add the tome and lore methods to the console object.

console.lore(5); // this will choose a random prefix from the default list and add your value as the suffix.

let newPhraseList = ["hey there", "woah there", "let's take a moment"];
console.tome(newPhraseList); // this will change the phrase list to your preferred story (so funny, right?)

console.lore(5); // this will now choose from the list of prefixes you provided and your value as the suffix.

console.resetHistory(); // this will set the prefix list back the defaults.
```

# But For Real, Why Would I Use This?
OK look, don't use this. I really made this just becase the method name sounded funny. `console.lore`, `tell a story while debugging`? Hilarious.

# Contributing
If you want to contribute to this, you probably have nothing better to do. Hontestly. 

