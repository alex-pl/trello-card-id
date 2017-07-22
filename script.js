// copy card id on click
const input = document.createElement('input');
document.body.appendChild(input);

document.addEventListener('click', (e) => {

	const elem = e.originalTarget;
	const isCardShortId = elem.classList.contains('card-short-id');

	if (isCardShortId) {
		e.stopImmediatePropagation();

		input.value = elem.textContent.replace('Nr. ', '#');
		input.select();
		document.execCommand('Copy');
	}

}, true);

// format card id
(function () {
	const elems = document.querySelectorAll('.card-short-id');
	for (let elem of elems) {
		elem.textContent = elem.textContent.replace('Nr. ', '#');
	}
})()
