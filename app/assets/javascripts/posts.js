$(function(){
	console.log("ready!");

	var text = ["I'm a Northwestern alum, Go 'Cats!"
	,"I love snowboarding, nothing beats a powder day."
	,"I was the Head of Product at <a target=\"_blank\"href=\"http://www.ribbon.co\">Ribbon</a>."
	,"I was raised in the Windy City."
	,"You should follow me on <a target=\"_blank\"href=\"http://www.dribbble.com/jisiguo\">Dribbble</a>."
	,"You should follow me on <a target=\"_blank\"href=\"http://www.twitter.com/jisiguo\">Twitter</a>."
	,"I will usually say yes to an adventure."
	,"I studied design, engineering and economics."
	,"I love to travel and explore the world."
	,"Minimalism tends to guide my design decisions."
	,"I created <a target=\"_blank\"href=\"http://www.builtinchicago.org/community/questions?title=&field_answer_count_value=&created=&last_updated=&sort_by=created&sort_order=DESC\">Chicago Founders</a>, a community for Chicago entrepreneurs."
	,"I've lived in Istanbul during two summers in college."
	,"I've traveled to 17 countries around the world."
	,"I can speak english, mandarin and spanish."
	,"I love playing pickup basketball."
	,"I'm an avid runner."
	,"Empathy for the user leads to good design."
	,"I'm interested in both software and hardware design."
	,"I'm a product designer, specializing in UX."
	,"I have recently gotten into cycling."
	,"I'm very interested in <a target=\"_blank\"href=\"http://en.wikipedia.org/wiki/Flow_(psychology)\">flow</a> and <a target=\"_blank\"href=\"http://en.wikipedia.org/wiki/Positive_psychology\">positive psychology.</a>"
	,"My name means \"lucky\" in Chinese."
	]

	var used = [];

	// This function is too slow, need to use a shuffled array
	// function duplicateCheck(x) {
	// 	if (used.indexOf(x) > -1) {
	// 		console.log("duplicate")
	// 		if (used.length == 21) {
	// 			used = [];
	// 			used.push(x);
	// 			return x;
	// 		}
	// 		x = Math.floor(Math.random()*21);
	// 		duplicateCheck(x);
	// 	}
	// 	else {
	// 		used.push(x);
	// 		return x;
	// 		console.log("not duplicate")
	// 	}
	// }


	function changeText() {
		var i = Math.floor(Math.random()*21);
		// $("#about-me").html(text[duplicateCheck(i)]);
		$("#about-me").html(text[i]);
		used.push(i);
		console.log(used);
	}

	$(".home").mouseenter(
	  function () {
	  	changeText();
	  	$("#about-me:hidden").fadeIn(500);
	  }
	);

	$("#header").mouseleave(
	  function () {
	    $("#about-me:visible").fadeOut(500);
	  }
	);

});