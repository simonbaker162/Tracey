import {
	alphabetFormRowMarkup,
	basicFormMarkup,
	namesFormRowMarkup,
	numbersFormRowMarkup,
	wordsFormRowMarkup
} from "./markup.js";

import { Printout } from "./Printout.js";

// available arguments for Form constructor parameter:
// "names", "words", "alphabet", "numbers"
export class Form {
	constructor(type) {
		this.type = type;
		this.initForm();
		this.grid = document.getElementById(`${this.type}FormGrid`);
		this.initSubmitListener();
		this.initAddNewRowListener();
		this.addNewRow();
	}

	initForm() {
		const formMarkup = basicFormMarkup(this.type);
		const formArea = document.getElementById("formArea");
		formArea.insertAdjacentHTML("beforeend", formMarkup);
	}

	initSubmitListener() {
		const form = document.getElementById(`${this.type}Form`);
		form.addEventListener("submit", (event) => {
			this.submitForm(event);
		});
	}

	submitForm(event) {
		event.preventDefault();
		const isValidInput = this.validateForm();
		if (isValidInput === true) {
			this.print();
		}
	}

	print() {
		const printout = new Printout(this.type);
		const loadingBackground = document.getElementById("loading-background");
		const spinnerContainer = document.getElementById("spinner-container");
		loadingBackground.classList.add("active");
		spinnerContainer.classList.add("active");
		printout.generateMarkup();

		/////////////////////////////
		// Due to fonts not loading,
		// best solution is probably
		// a timeout with a loading
		// spinner so the user at least
		// thinks the application isn't
		// hanging
		// OR USE THE FONT SOMEWHERE ELSE!!!
		// PREVIEW IMAGE OF A RESOURCE??????
		setTimeout(() => {
			spinnerContainer.classList.remove("active");
			printout.promptPrint();
		}, 2500);

		/////////////////////////
		///////// CHANGE BELOW TO AN
		///////// EVENT LISTENER
		///////// IMPLEMENTATION
		////////////////////////

		// setTimeout(() => {
		// 	printout.clearPrintArea();
		// }, 8000);
		window.onafterprint = (event) => {
			loadingBackground.classList.remove("active");
			printout.clearPrintArea();
		};
	}

	validateForm() {
		let validity = true;
		const inputs = document.querySelectorAll("input");
		inputs.forEach((input) => {
			if (!input.value) {
				validity = false;
			}
		});
		if (validity === false) {
			const messageElement = document.getElementById("form-error-message");
			this.flashMessage(messageElement, "Please fill in all fields first!");
		}
		return validity;
	}

	addNewRow(id = 1) {
		let newRowMarkup;
		switch (this.type) {
			case "names":
				newRowMarkup = namesFormRowMarkup(id);
				break;
			case "words":
				newRowMarkup = wordsFormRowMarkup(id);
				break;
			case "alphabet":
				newRowMarkup = alphabetFormRowMarkup(id);
				break;
			case "numbers":
				newRowMarkup = numbersFormRowMarkup(id);
		}
		this.grid.insertAdjacentHTML("beforeend", newRowMarkup);
		this.initDeleteRowEventListener(id);
	}

	deleteRow(id) {
		const rows = document.getElementsByClassName(`${this.type}-form__row`);
		if (rows.length > 1) {
			const row = document.getElementById(`${this.type}FormRow${id}`);
			row.parentElement.removeChild(row);
		} else {
			const messageElement = document.getElementById("delete-btn-column");
			this.flashMessage(messageElement, "Cannot delete last row!");
		}
	}

	flashMessage(element, message) {
		element.innerHTML = message;
		setTimeout(() => {
			element.innerHTML = "";
		}, 2500);
	}

	initAddNewRowListener() {
		const addNewRowBtn = document.getElementById(`${this.type}FormNewRowBtn`);
		addNewRowBtn.addEventListener("click", () => {
			const rows = document.querySelectorAll(`.${this.type}-form__row`);
			if (rows.length > 0) {
				const lastRowId = parseInt(rows[rows.length - 1].id.replace(/\D/g, "")); // regular expression to extract just the numbers from the ID of the last row
				const nextRowId = lastRowId + 1;
				this.addNewRow(nextRowId);
			} else if (rows.length === 0) {
				this.addNewRow(1);
			}
		});
	}

	initDeleteRowEventListener(id) {
		const deleteBtn = document.getElementById(`${this.type}Delete${id}`);
		deleteBtn.addEventListener("click", () => {
			this.deleteRow(id);
		});
	}
}
