

(function () {

var helloSpeaker = {};

var speakWord = "Hello";

helloSpeaker.speak = function speak(names) {
  console.log(speakWord + " " + names);
}

window.helloSpeaker = helloSpeaker;
})(window);