window.addEventListener("scroll", (e) => {
	let nav = document.querySelector(".nav");
	nav.style.position = "fixed";
	const scrollY = window.scrollY;
	if (scrollY == 0) {
		nav.style.position = "relative";
		nav.style.transition = `${nav.style.position} .2s`;
	}

});