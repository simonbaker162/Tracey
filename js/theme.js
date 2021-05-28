export const changeTheme = (type) => {
	const heading = document.getElementById("heading");
	heading.style.opacity = 1; // for opacity transition on initial page load
	const themeHex = document.getElementById(`${type}FormTab`).dataset.themeHex;
	heading.style.color = themeHex;
	const themeImages = document.querySelectorAll(".children-img");
	themeImages.forEach((image) => {
		image.style.opacity = 0;
		// image.style.display = "none";
	});
	const selectedThemeImage = document.getElementById(`children-img-${type}`);
	selectedThemeImage.style.opacity = 1;
	// selectedThemeImage.style.display = "block";
	const optionsImages = document.querySelectorAll(".options-img");
	optionsImages.forEach((image) => {
		image.style.opacity = 0;
		// image.style.display = "none";
	});
	const selectedOptionImage = document.getElementById(`options-img-${type}`);
	selectedOptionImage.style.opacity = 1;
	// selectedOptionImage.style.display = "block";
};
