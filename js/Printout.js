export class Printout {
	constructor(type) {
		this.type = type;
		this.numRows = document.querySelectorAll(`.${this.type}-form__row`).length;
		this.printArea = document.getElementById("printArea");
	}

	generateMarkup() {
		for (let i = 1; i <= this.numRows; i++) {
			const name = document.getElementById(`${this.type}Name${i}`).value;
			const size = document.getElementById(`${this.type}Size${i}`).value;
			const repeats = document.getElementById(`${this.type}Repeats${i}`).value;

			const formatPages = () => {
				const pElements = this.printArea.getElementsByClassName(`${size} para-print ${name}-${i}`);
				const childFirstRepeat = pElements[0];
				const childLastRepeat = pElements[repeats - 1];
				const personalisation = document.createElement("h2");
				personalisation.innerText = `${name}'s tracing activity!`;
				personalisation.classList.add("personalise");
				childFirstRepeat.insertAdjacentElement("beforebegin", personalisation);
				childLastRepeat.style.pageBreakAfter = "always";
			};

			switch (this.type) {
				case "names":
					for (let j = 1; j <= repeats; j++) {
						printArea.insertAdjacentHTML("beforeend", `<p class="${size} para-print ${name}-${i}">${name}</p>`);
					}
					break;
				case "words":
					const word = document.getElementById(`wordsWord${i}`).value;
					printArea.insertAdjacentHTML("beforeend", `<p>${name}</p>`);
					for (let j = 1; j <= repeats; j++) {
						printArea.insertAdjacentHTML("beforeend", `<p class="${size} para-print ${name}-${i}">${word}</p>`);
					}
					break;
				case "alphabet":
					const selectedCase = document.getElementById(`alphabetCase${i}`).value;
					printArea.insertAdjacentHTML("beforeend", `<p>${name}</p>`);
					for (let j = 1; j <= repeats; j++) {
						if (selectedCase === "upper") {
							printArea.insertAdjacentHTML(
								"beforeend",
								`<p class="${size} para-print ${name}-${i}">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>`
							);
						} else {
							printArea.insertAdjacentHTML(
								"beforeend",
								`<p class="${size} para-print ${name}-${i}">abcdefghijklmnopqrstuvwxyz</p>`
							);
						}
					}
					break;
				case "numbers":
					const selectedNumbers = document.getElementById(`numbersNumbers${i}`).value;
					printArea.insertAdjacentHTML("beforeend", `<p>${name} ${name}-${i}</p>`);
					for (let j = 1; j <= repeats; j++) {
						if (selectedNumbers === "20") {
							printArea.insertAdjacentHTML(
								"beforeend",
								`<p class="${size} para-print ${name}-${i}">1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20</p>`
							);
						} else {
							printArea.insertAdjacentHTML(
								"beforeend",
								`<p class="${size} para-print ${name}-${i}">1 2 3 4 5 6 7 8 9 10</p>`
							);
						}
					}
			}
			formatPages();
		}
	}

	clearPrintArea() {
		const printArea = document.getElementById("printArea");
		printArea.innerHTML = "";
	}

	promptPrint() {
		window.print();
	}
}
