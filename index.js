var tragedyModeBlacklist = require('iscool/defaultlists')
  .get('tragedyModeBlacklist');

function CanIChimeIn(createOpts) {
  var extraWordsToAvoid;

  if (createOpts) {
    extraWordsToAvoid = createOpts.extraWordsToAvoid;
  }

  function canIChimeIn(text) {
    var words = text.slice().toLowerCase().split(/[ ":.,;!?#]/);
    var isOK = true;

    if (words.some(isWordInTragedyBlacklist)) {
      isOK = false;
    }

    if (isOK && extraWordsToAvoid && words.some(isWordInExtraWords)) {
      isOK = false;
    }

    return isOK;
  }

  function isWordInExtraWords(word) {
    return extraWordsToAvoid.indexOf(word) !== -1;
  }

  return canIChimeIn;
}

function isWordInTragedyBlacklist(word) {
  return tragedyModeBlacklist.indexOf(word) !== -1;
}

module.exports = CanIChimeIn;
