const bulbImageEl = document.getElementById('bulb-img');
const bulbButtonEl = document.getElementById('bulb-button');

bulbButtonEl.addEventListener('click', () => {
	bulbButtonEl.classList.toggle('on');

	if (bulbButtonEl.classList.contains('on')) {
		bulbImageEl.src = './img/yellow_lamp.png';
		bulbButtonEl.innerHTML = 'Spegni';
	} else {
		bulbImageEl.src = './img/white_lamp.png';
		bulbButtonEl.innerHTML = 'Accendi';
	}
});
