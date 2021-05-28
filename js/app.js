import { Form } from "./Form.js";
import { changeTheme } from "./theme.js";

const clearFormArea = () => {
	const formArea = document.getElementById("formArea");
	formArea.innerHTML = "";
};

const createForm = (type) => {
	new Form(type);
};

const initTabEventListeners = () => {
	const tabs = document.querySelectorAll(".tab");
	tabs.forEach((tab) => {
		const type = tab.textContent.toLowerCase();
		tab.addEventListener("click", () => {
			clearFormArea();
			changeTheme(type);
			createForm(type);
		});
	});
};

const init = () => {
	changeTheme("names");
	createForm("names");
	initTabEventListeners();
};

init();

// FEATURE submit changes to update if new row was added

// FEATURE dynamic delete button for last row - allow user
// to delete first row if at least one other row exists

// CSS make variables for theme colours so they can be easily changed
// programmatically set theme colour?

// Refactor printout and maybe theme to object-oriented
