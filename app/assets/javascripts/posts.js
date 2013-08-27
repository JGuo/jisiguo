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
	,"I'm very interested in the theory of <a target=\"_blank\"href=\"http://en.wikipedia.org/wiki/Flow_(psychology)\">flow</a>.</a>"
	,"My name means \"lucky\" in Chinese."
	]

	function shuffle(o){ //v1.0
    	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	};

	var list = [];
	for (var i = 0; i <= 21; i++) {
	    list.push(i);
	}

	var shuffled = shuffle(list);

	var index = 0;

	function changeText() {
		var x = shuffled[index];
		$("#about-me").html(text[x]);
		console.log(x);
		index++;
		if(index>21) {
			console.log("RESTART!")
			index = 0;
			shuffled = shuffle(list);
		}
	}

	function hoverListener() {
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
	}

	hoverListener();

});