const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Design Experiments",
				weight: 10
			}, {
				text: "Statistical Optimizations",
				weight: 10
			}, {
				text: "Computer Vision",
				weight: 8
			}, {
				text: "Data Manipulation",
				weight: 11
			}, {
				text: "IoT(Robotics)",
				weight: 6
			}, {
				text: "Regression Analysis",
				weight: 10
			}, {
				text: "Cloud Services",
				weight: 9
			}, {
				text: "Conterizations",
				weight: 9
			}, {
				text: "Visualizations",
				weight: 8
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
				"Data Analyst / Computer Vision Engineer.", "Love automating data pipelines with code.", "open to tutoring others on computer science concepts.", "am changing the world with baby steps."
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
