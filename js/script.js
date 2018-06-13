// keep track of clicks
let catClick = 0;

// var for audio 
const meow = new Audio('meow.mp3');

// add one click to screen when player clicks on kitty
document.querySelector('.cat').addEventListener('click', function() {
	catClick++;
	document.querySelector('.level-text').innerHTML = catClick;

	if(catClick % 10 === 0) {
		meow.play();
	}
});