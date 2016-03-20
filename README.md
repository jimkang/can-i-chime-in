can-i-chime-in
=========

Given some text, makes a guess as to whether or not it's OK for something about as clueless as a bot to reply that text. Works off of keywords, rather than natural language understanding.

Warning: Definitely not perfect, but better than nothing in my estimation.

Installation
------------

    npm install can-i-chime-in

Usage
-----

    var canIChimeIn = require('can-i-chime-in')({
      extraWordsToAvoid: [
        'rap',
        'died'
      ]
    });
    console.log(canIChimeIn('Ferguson is so sad.'));

Output:

    false

If you specify `extraWordsToAvoid`, the words should be lowercase.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
