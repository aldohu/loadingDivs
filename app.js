document.addEventListener('DOMContentLoaded', function (event) {
	var boxes = document.querySelectorAll('.box');

	var options = {
		threshold: 0.5, // Adjust this value as per your requirements
	};

	var observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			let random = Math.round(Math.random() * 1);
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				entry.target.classList.remove('left');
				entry.target.classList.remove('right');
			} else {
				entry.target.classList.remove('show');
				if (random === 1) {
					entry.target.classList.add('right');
				} else {
					entry.target.classList.add('left');
				}
			}
		});
	}, options);

	boxes.forEach(function (box) {
		observer.observe(box);
	});
});
