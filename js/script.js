// keep track of clicks
let catClick = 0;

// add one click to screen when player clicks on kitty
document.querySelector('.cat').addEventListener('click', function() {
	catClick++;
	document.querySelector('.level-text').innerHTML = catClick;
});