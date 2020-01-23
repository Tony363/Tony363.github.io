const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Tony",
				weight: 10
			}, {
				text: "Object Oriented Programming",
				weight: 5
			}, {
				text: "XGboost/Sklearn",
				weight: 12
			}, {
				text: "Pandas/Numpy",
				weight: 9
			}, {
				text: "Algorithms and Data structures",
				weight: 9
			}, {
				text: "Basic webscrapping",
				weight: 11
			}, {
				text: "R programming",
				weight: 7
			}, {
				text: "Functional Programming",
				weight: 7
			}, {
				text: "Data Visualization",
				weight: 5
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an aspring Python Data analyst.", "Love automating excel with code.", "am open to tutor others with python.", "am changing the world with baby steps."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
