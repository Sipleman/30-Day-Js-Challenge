
const seconds_hand = document.querySelector(".sec-arr");
const minutes_hand = document.querySelector(".min-arr");
const hours_hand = document.querySelector(".hour-arr");

function setDate(){
	date = new Date();

	seconds_deg = date.getSeconds()*360/60 + 90;
	min_deg = date.getMinutes()*360/60 + 90 + (date.getSeconds()*100/360);
	hour_deg = ((date.getHours()*360/12) + 90) + (date.getMinutes()*100/360);
	
	seconds_hand.style.transform = `rotate(${seconds_deg}deg)`;
	minutes_hand.style.transform = `rotate(${min_deg}deg)`;
	hours_hand.style.transform = `rotate(${hour_deg}deg)`;
	console.log(seconds_deg);

}

setInterval(setDate, 1000);
