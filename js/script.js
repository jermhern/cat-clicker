// keep track of clicks
let catClick = 0;

// var for audio 
const meow = new Audio('meow.mp3');

// add one click to screen when player clicks on kitty
document.querySelector('.cat').addEventListener('click', function() {
	
	// add one to the cat clicks
	catClick++;

	// change the HTML on page to the cat clicks
	document.querySelector('.level-text').innerHTML = catClick;

	// play meow sound every 10 clicks 
	if(catClick % 10 === 0) {
		meow.play();
	}
});