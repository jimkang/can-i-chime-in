var test = require('tape');
var CanIChimeIn = require('../index');

var testCases = [
    {
      text: 'Man, WTF is going in #ferguson',
      expected: false
    },
    {
      text: 'Man, WTF is going in ferguson',
      expected: false
    },
    {
      text: 'Ferguson is so sad.',
      expected: false
    },
    {
      text: 'WTF Fergie is bonkers' ,
      expected: true
    },
    {
      text: 'We`re observing genocide in motion.',
      expected: false
    },
    {
      text: 'My cat just puked!',
      expected: true
    },
    {
      text: 'Let\'s make a deal.',
      createOpts: {
        extraWordsToAvoid: [
          'moving',
          'angularjs'
        ]
      },
      expected: true
    },
    {
      text: 'What a terrible crash.',
      createOpts: {
        extraWordsToAvoid: [
          'moving',
          'angularjs'
        ]
      },
      expected: false
    },
    {
      text: 'Here is another article about AngularJS!',
      createOpts: {
        extraWordsToAvoid: [
          'moving',
          'angularjs'
        ]
      },
      expected: false
    }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic test: ' + testCase.text, basicTest);

  function basicTest(t) {
    var opts;
    if (testCase.createOpts) {
      opts = testCase.createOpts;
    }
    var canIChimeIn = CanIChimeIn(opts);
    t.equal(
      canIChimeIn(testCase.text),
      testCase.expected,
      'Correctly determines if you should chime in.'
    );
    t.end();
  }
}
