italian-badwords-list v1.0.3
========

lista di parolacce italiane
dizionario di parolacce italiane
list of bad (profanity) italian words 
italian badwords list

Ringraziamenti/Thanks to all: 
[Google's "what do you love" project](http://www.wdyl.com/)
[Jamie Wilkinson](https://gist.github.com/jamiew) 
[here](https://gist.github.com/jamiew/1112488)
[badwords](https://github.com/MauriceButler/badwords)
[badwords-list](https://github.com/web-mech/badwords-list)
[parolacce.org](https://www.parolacce.org/)


This data has been exposed as an object that contains

 - an array
 - a regular expression
 - a function to transform words to leet( leet -> 1337)

depending on what is required for your purposes.

Install
=======

    npm install italian-badwords-list

Usage
=====

```
let list = require('italian-badwords-list'),
let array = list.array,
let regex = list.regex;
let transformToLeet = list.transformToLeet;
let original = 'text';
let transformed = transformToLeet(original);

```

Testing
=======

#### Requires
- Mocha
- better-assert


```
npm test
```

**or**

```
REPORTER=spec make
```

**or**

```
mocha
```



