import { Form } from "./Form.js";
import { Theme } from "./Theme.js";

const createForm = (type) => {
	new Form(type);
};

const clearFormArea = () => {
	const formArea = document.getElementById("formArea");
	formArea.innerHTML = "";
};

const toggleInstructions = () => {
	const instructionsParas = document.querySelectorAll(".instructions-para");
	instructionsParas.forEach((element) => {
		element.classList.toggle("hide");
	});
};

const toggleInstructionsBtnText = () => {
	const instructionsBtn = document.getElementById("instructions-btn");
	if (instructionsBtn.innerHTML === "Show") {
		instructionsBtn.innerHTML = "Hide";
	} else if (instructionsBtn.innerHTML === "Hide") {
		instructionsBtn.innerHTML = "Show";
	}
};

const initTabEventListeners = () => {
	const tabs = document.querySelectorAll(".tab");
	tabs.forEach((tab) => {
		const type = tab.textContent.toLowerCase();
		tab.addEventListener("click", () => {
			clearFormArea();
			createForm(type);
			const theme = new Theme(type);
			theme.changeTheme();
		});
	});
};

const initWindowEventListener = () => {
	let windowWidth = window.innerWidth;
	window.addEventListener("resize", (event) => {
		const newWidth = event.target.innerWidth;
		if (windowWidth < 568 && newWidth >= 568) {
			window.scroll(0, 0);
		}
		windowWidth = newWidth;
	});
};

const initInstructionsEventListener = () => {
	const instructionsBtn = document.getElementById("instructions-btn");
	instructionsBtn.addEventListener("click", (event) => {
		toggleInstructions();
		toggleInstructionsBtnText();
	});
};

const initApp = () => {
	createForm("names");
	const theme = new Theme("names");
	theme.displayHeading();
	theme.changeTheme();
	initTabEventListeners();
	initWindowEventListener();
	initInstructionsEventListener();
};

initApp();
