$(function(){
	console.log("ready!");

	var text = ["I'm a Northwestern alum, Go 'Cats!","I love snowboarding, nothing beats a powder day.","I'm simplifying payments at <a target=\"-blank\"href=\"http://www.ribbon.co\">Ribbon</a>.","I was raised in the Windy City.","You should follow me on <a target=\"-blank\"href=\"http://www.dribbble.com/jisiguo\">Dribbble</a>.","You should follow me on <a target=\"-blank\"href=\"http://www.twitter.com/jisiguo\">Twitter</a>.","Awesome since 1988.","I studied design, engineering and economics.","Is this real life?","ಠ_ಠ"]

	function changeText() {
		var i = Math.floor(Math.random()*10)
		$("#about-me-text").html(text[i]);
	}

	changeText()

	var textInterval = setInterval(function() {
    	changeText();
	}, 3000);

});