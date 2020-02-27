italian-badwords-list v1.0.0
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
 - an object
 - a regular expression

depending on what is required for your purposes.


Install
=======

    npm install italian-badwords-list

Usage
=====

```
var list = require('italian-badwords-list'),
	array = list.array,
	object = list.object,
	regex = list.regex;
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



