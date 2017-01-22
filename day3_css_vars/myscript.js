
function inputTriggered(){

	console.log(this.value);
	var suffix = this.name == 'base'? '': 'px';  
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

var inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("change", inputTriggered));
