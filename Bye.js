

(function(window) {
	var speakWord = "じゃまたね・さよなら";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);
