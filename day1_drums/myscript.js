window.addEventListener('keydown', function(e){

});

function removeTransition(e){
	var divEl = document.querySelector(`div[data-key="${e.target.attributes[0].value}"]`);
	divEl.classList.remove('playing');
}

function playSound(e){
	e.target.classList.add('playing');
	console.log(e.keyCode)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;
	if (key){
		key.classList.add('playing');
	}
	audio.currentTime = 0;
	audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
for( var i=0 ; i<keys.length; i++) {
	keys[i].addEventListener('transitionend', removeTransition);
}
const audio = Array.from(document.querySelectorAll('audio'));
audio.forEach(a => a.onended = removeTransition);
window.addEventListener('keydown', playSound);

