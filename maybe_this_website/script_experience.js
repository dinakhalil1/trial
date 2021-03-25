window.onload = function(argument) {

	// var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
	var lyric = "politics freedom freedom freedom freedom freedom freedom freedom npr npr npr npr npr npr npr npr npr npr npr npr democracy democracy democracy democracy democracy democracy democracy democracy democracy disappeared disappeared disappeared disappeared disappeared disappeared disappeared dead dead dead dead dead minorities minorities minorities minorities minorities minorities minorities minorities law law law law law law dictatorship dictatorship dictatorship dictatorship dictatorship dictatorship dictatorship dictatorship dictatorship totalitarianism totalitarianism totalitarianism autocracy autocracy autocracy autocracy autocracy press press press press press press press press press press press newspapers newspapers newspapers newspapers newspapers newspapers fascism fascism fascism fascism fascism oppression regime oppression regime oppression regime oppression regime oppression regime oppression regime corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption corruption nytimes nytimes nytimes nytimes Jamal-Khashoggi Jamal-Khashoggi Jamal-Khashoggi Jamal-Khashoggi Jamal-Khashoggi Jamal-Khashoggi Jamal-Khashoggi Maria-Ressa Maria-Ressa Maria-Ressa Maria-Ressa Maria-Ressa Maria-Ressa Maria-Ressa fear fear fear fear fear fear fear fear fear politics politics politics politics politics politics politics politics politics politics politics news news news news news news news news news news news rights rights rights rights rights rights rights rights rights rights news writing broadcast the public media people fear hatred power media journalism paper magazine state-run informing anouncing narrating recording reporting whistleblower whistleblower whistleblower Washington-Post fox-news panama-papers dissidents dissidents informant law protection informant killing snitch criminal crime danger spy private public illicit illicit illicit unsafe abuse";
	// حرية الصحافه حرية الصحافه حرية الصحافه حرية الصحافه حرية الصحافه حرية الصحافه حرية الصحافه حرية الصحافه خوف خوف خوف خوف خوف خوف خوف خوف خوف خوف
	var words = {};
	var words_attr = [];
	string_handle(lyric);

	var canvas = document.getElementById('c');
	// canvas.width = window.innerWidth;
	// canvas.height = window.innerHeight;
	canvas.width = window.innerWidth*.999;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		// c.fillStyle = 373334;
		c.fillStyle = 'red'
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 10 + 'px prestige-elite-std'
			// this.font = words[key] * 15 + 'px dunbar-low'
			// this.font = words[key] * 10 + 'px poppins'
			this.speed = (words[key]);
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length);

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) {
		var split_str = str.split(" ");
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}

}

