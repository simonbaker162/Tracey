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
		const printout = new Printout(this.type);
		printout.generateMarkup();
		// printout.clearImages();
		setTimeout(() => {
			printout.promptPrint();
		}, 3000)
		setTimeout(() => {
			printout.clearPrintArea();
		}, 6000);
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
		if (id === 1) {
			const deleteBtn = document.getElementById(`${this.type}Delete${id}`);
			deleteBtn.style.display = "none"; // hide delete button for first row so user can't delete all rows
		}
		this.initDeleteRowEventListener(id);
	}

	deleteRow(id) {
		const row = document.getElementById(`${this.type}FormRow${id}`);
		row.remove();
	}

	initAddNewRowListener() {
		const addNewRowBtn = document.getElementById(`${this.type}FormNewRowBtn`);
		addNewRowBtn.addEventListener("click", () => {
			const rows = document.querySelectorAll(`.${this.type}-form__row`);
			const lastRowId = parseInt(rows[rows.length - 1].id.replace(/\D/g, "")); // regular expression to extract just the numbers from the ID of the last row
			const nextRowId = lastRowId + 1;
			this.addNewRow(nextRowId);
		});
	}

	initDeleteRowEventListener(id) {
		const deleteBtn = document.getElementById(`${this.type}Delete${id}`);
		deleteBtn.addEventListener("click", () => {
			this.deleteRow(id);
		});
	}
}
