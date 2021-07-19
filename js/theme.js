export class Theme {
	constructor(type) {
		this.type = type;
		this.heading = document.getElementById("heading");
		this.themeHex = document.getElementById(`${type}FormTab`).dataset.themeHex;
		this.selectedThemeImage = document.getElementById(`children-img-${this.type}`);
		this.selectedOptionsImage = document.getElementById(`options-img-${this.type}`);
	}

	displayHeading() {
		this.heading.classList.add("active");
	}

	changeTheme() {
		this.hideAllImages();
		this.heading.style.color = this.themeHex;
		this.selectedThemeImage.classList.add("active");
		this.selectedOptionsImage.classList.add("active");
	}

	hideAllImages() {
		const childrenImages = document.querySelectorAll(".children-img");
		childrenImages.forEach((image) => {
			image.classList.remove("active");
		});
		const optionsImages = document.querySelectorAll(".options-img");
		optionsImages.forEach((image) => {
			image.classList.remove("active");
		});
	}
}
