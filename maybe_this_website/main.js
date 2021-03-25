// Get The Date
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkTime() {
	var date = new Date();
	var sufix = '';
	var hours = ('0' + date.getHours()).slice(-2);
	var minutes = ('0' + date.getMinutes()).slice(-2);
	var day = date.getDate();
	var month = monthNames[date.getMonth()];
	var weekday = dayNames[date.getDay()];
	var year = date.getFullYear();
	if (day > 3 && day < 21) sufix = 'th';
	switch (day % 10) {
		case 1:
			sufix = "st";
		case 2:
			sufix = "nd";
		case 3:
			sufix = "rd";
		default:
			sufix = "th";
	}
	document.getElementById('time').innerHTML = weekday + ' ' + day + sufix + ', ' + month + ' ' + year;
}
setInterval(checkTime(), 1000);





// Dark Mode Switcher
// Source: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
}
toggleSwitch.addEventListener('change', switchTheme, false);

// Store the user preference for future visits
function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
}

// Check for saved user preference, if any, load on website reopening
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
	}
}



  function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "./images/belarus.jpg") 
        {
            document.getElementById("imgClickAndChange").src = "./images/belarus correction.jpg";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "./images/belarus correction.jpg";
        }
    }
function changeImage1() {

         if (document.getElementById("imgClickAndChange1").src == "./images/democracy.jpg") 
        {
            document.getElementById("imgClickAndChange1").src = "./images/democracy correction.jpg";
        }
        else 
        {
            document.getElementById("imgClickAndChange1").src = "./images/democracy correction.jpg";
        }
}
function changeImage2() {
         if (document.getElementById("imgClickAndChange2").src == "./images/women journalists.jpg") 
        {
            document.getElementById("imgClickAndChange2").src = "./images/women journalists correction.jpg";
        }
        else 
        {
            document.getElementById("imgClickAndChange2").src = "./images/women journalists correction.jpg";
        }
    }

    function changeImage3() {
         if (document.getElementById("imgClickAndChange3").src == "./images/awards.jpg") 
        {
            document.getElementById("imgClickAndChange3").src = "./images/awards correction.jpg";
        }
        else 
        {
            document.getElementById("imgClickAndChange3").src = "./images/awards correction.jpg";
        }
    }