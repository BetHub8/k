


(function () {

var names = ["ねこ", "のけ", "おけ", "なむ", "なんぐ", "ふらんす", "Larry", "Paula", "ぁうたろ", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toUpperCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



