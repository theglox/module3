(function () {

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var byeSpeaker={};
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
byeSpeaker.speak = function speak(names) {
  console.log(speakWord + " " + names);
}


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
window.byeSpeaker = byeSpeaker;
})(window);