$(function(){
	console.log("ready!");

	var text = ["I'm a <a class=\"northwestern\" target=\"_blank\"href=\"http://espn.go.com/college-football/team/_/id/77/northwestern-wildcats\">Northwestern</a> alum, Go 'Cats!"
	,"I'm always on the lookout for a <a target=\"_blank\"href=\"http://www.onthesnow.com/lake-tahoe/skireport.html\">powder day</a>."
	,"I was the Head of Product at <a class=\"ribbon\" target=\"_blank\"href=\"http://www.ribbon.co\">Ribbon</a>."
	,"I was raised in the Windy City."
	,"You should follow me on <a class=\"dribbble\" target=\"_blank\"href=\"http://www.dribbble.com/jisiguo\">Dribbble</a>."
	,"You should follow me on <a class=\"twitter\" target=\"_blank\"href=\"http://www.twitter.com/jisiguo\">Twitter</a>."
	,"I studied engineering, economics and design."
	,"Minimalism tends to guide my design decisions."
	,"I created <a target=\"_blank\"href=\"http://www.builtinchicago.org/community/questions?title=&field_answer_count_value=&created=&last_updated=&sort_by=created&sort_order=DESC\">Chicago Founders</a>."
	,"I've lived in Istanbul for two summers."
	,"I've traveled to 18 countries around the world."
	,"I can speak english, mandarin and spanish."
	,"I love playing pickup basketball."
	,"I'm an avid runner."
	,"Empathy for the user leads to good design."
	,"I'm interested in software and hardware design."
	,"I'm a product designer, specializing in UX."
	,"I'm interested in the theory of <a target=\"_blank\"href=\"http://en.wikipedia.org/wiki/Flow_(psychology)\">flow</a>.</a>"
	,"My name means \"lucky\" in Chinese."
	,"You should connect with me on <a class=\"linkedin\" target=\"_blank\"href=\"http://www.linkedin.com/in/jisiguo\">LinkedIn</a>."
	,"I love the outdoors and adventure sports."
	]

	function shuffle(o){ //v1.0
    	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	};

	var list = [];
	for (var i = 0; i <= 20; i++) {
	    list.push(i);
	}

	var shuffled = shuffle(list);

	var index = 0;

	function changeText() {
		var x = shuffled[index];
		$("#about-me").html(text[x]);
		console.log(x);
		index++;
		if(index>20) {
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