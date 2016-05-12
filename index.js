var tragedyModeBlacklist = require('iscool/defaultlists')
  .get('tragedyModeBlacklist');

var badTimesIndicators = require('./bad-times-indicators');

function WordIsInList(list) {
  return function wordIsInList(word) {
    return list.indexOf(word) !== -1;
  }
}

var isWordInTragedyBlacklist = WordIsInList(tragedyModeBlacklist);
var isInBadTimesIndicators = WordIsInList(badTimesIndicators);

function CanIChimeIn(createOpts) {
  var isWordInExtraWords;

  if (createOpts) {
    isWordInExtraWords = WordIsInList(createOpts.extraWordsToAvoid);
  }

  function canIChimeIn(text) {
    var words = text.slice().toLowerCase().split(/[ ":.,;!?#]/);

    if (words.some(isWordInTragedyBlacklist)) {
      return false;
    }

    if (words.some(isInBadTimesIndicators)) {
      return false;
    }

    if (isWordInExtraWords && words.some(isWordInExtraWords)) {
      return false;
    }

    return true;
  }

  return canIChimeIn;
}

module.exports = CanIChimeIn;
