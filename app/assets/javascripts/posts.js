$(function(){
	console.log("ready!");

	var text = ["I'm a <a class=\"northwestern\" target=\"_blank\"href=\"http://espn.go.com/college-football/team/_/id/77/northwestern-wildcats\">Northwestern</a> alum, Go 'Cats!"
	,"I love to <a target=\"_blank\"href=\"http://instagram.com/p/yQiK0tF6Es/?modal=true\">snowboard</a>."
	,"I led product at <a target=\"_blank\"href=\"http://mashable.com/2013/04/10/ribbon-twitter-purchases/\">Ribbon</a>."
	,"I was raised in the <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=LQ488QrqGE4\">Windy City</a>."
	,"You should follow me on <a class=\"dribbble\" target=\"_blank\"href=\"http://www.dribbble.com/jisiguo\">Dribbble</a>."
	,"You should follow me on <a class=\"twitter\" target=\"_blank\"href=\"http://www.twitter.com/jisiguo\">Twitter</a>."
	,"I studied engineering, economics and design."
	,"Minimalism and empathy guide my designs."
	,"I co-founded <a target=\"_blank\"href=\"http://techcrunch.com/2014/08/14/camoji-lets-you-create-and-text-animated-gifs-via-imessage/\">Camoji</a>."
	,"I co-founded <a target=\"_blank\"href=\"http://techcrunch.com/2013/12/11/leo/\">Leo</a>."
	,"I designed <a target=\"_blank\"href=\"http://techcrunch.com/2014/07/17/jobr-2m/\">Jobr</a>."
	,"I created <a target=\"_blank\"href=\"http://techcrunch.com/2014/07/24/karma-swipe-lets-you-browse-reddit-with-tinder-like-swipes/\">Karma Swipe</a>."
	,"I created <a target=\"_blank\"href=\"http://www.builtinchicago.org/community/questions?title=&field_answer_count_value=&created=&last_updated=&sort_by=created&sort_order=DESC\">Chicago Founders</a>."
	,"My name means \"lucky\" in Chinese."
	,"You should connect with me on <a class=\"linkedin\" target=\"_blank\"href=\"http://www.linkedin.com/in/jisiguo\">LinkedIn</a>."
	,"I'm an avid <a target=\"_blank\"href=\"https://www.strava.com/athletes/2308448\">cyclist</a>."
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

	$('.tweet').click(function(event) {
	    var width  = 550,
	        height = 390,
	        left   = ($(window).width()  - width)  / 2,
	        top    = ($(window).height() - height) / 2,
	        url    = this.href,
	        opts   = 'status=1' +
	                 ',width='  + width  +
	                 ',height=' + height +
	                 ',top='    + top    +
	                 ',left='   + left;

	    window.open(url, 'twitter', opts);

	    return false;
	});

});