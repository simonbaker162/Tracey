export const basicFormMarkup = (type) => {
	let markup;
	switch (type) {
		case "names":
			markup = `
      <form class="form names-form" id="namesForm">
          <div class="names-form__grid" id="namesFormGrid">
            <div class="names-form__header-row" id="namesFormHeaderRow">
              <h3 class="names-form__heading wide-column">Child Name</h3>
              <h3 class="names-form__heading medium-column">Font Size</h3>
              <h3 class="names-form__heading narrow-column">Repeats</h3>
              <span class="narrow-column error-message" id="delete-btn-column"></h3>
            </div>
          </div>
          <div class="button-row">
            <button type="button" class="add-row-btn" id="namesFormNewRowBtn"><img src="./img/plus-icon.png" alt="Add new row icon" class="icon"/>Add new row</button>
            <button type="submit" class="submit-btn"><img src="./img/tick-icon.png" alt="Submit form icon" class="icon" />Create printout</button>
            <span class="error-message" id="form-error-message"></span>
          </div>
        </form>
      `;
			break;
		case "words":
			markup = `
      <form class="form words-form" id="wordsForm">
        <div class="words-form__grid" id="wordsFormGrid">
          <div class="words-form__header-row" id="wordsFormHeaderRow">
            <h3 class="words-form__heading wide-column">Child Name</h3>
            <h3 class="words-form__heading wide-column">Words</h3>
            <h3 class="words-form__heading medium-column">Font Size</h3>
            <h3 class="words-form__heading narrow-column">Repeats</h3>
            <span class="narrow-column error-message" id="delete-btn-column"></h3>
          </div>
        </div>
        <div class="button-row">
          <button type="button" class="add-row-btn" id="wordsFormNewRowBtn"><img src="./img/plus-icon.png" alt="Add new row icon" class="icon"/>Add new row</button>
          <button type="submit" class="submit-btn"><img src="./img/tick-icon.png" alt="Submit form icon" class="icon" />Create printout</button>
          <span class="error-message" id="form-error-message"></span>
        </div>
      </form>
      `;
			break;
		case "alphabet":
			markup = `
      <form class="form alphabet-form" id="alphabetForm">
          <div class="alphabet-form__grid" id="alphabetFormGrid">
            <div class="alphabet-form__header-row" id="alphabetFormHeaderRow">
              <h3 class="alphabet-form__heading wide-column">Child Name</h3>
              <h3 class="alphabet-form__heading medium-column">Case</h3>
              <h3 class="alphabet-form__heading medium-column">Font Size</h3>
              <h3 class="alphabet-form__heading narrow-column">Repeats</h3>
              <span class="narrow-column error-message" id="delete-btn-column"></h3>
            </div>
          </div>
          <div class="button-row">
            <button type="button" class="add-row-btn" id="alphabetFormNewRowBtn"><img src="./img/plus-icon.png" alt="Add new row icon" class="icon"/>Add new row</button>
            <button type="submit" class="submit-btn"><img src="./img/tick-icon.png" alt="Submit form icon" class="icon" />Create printout</button>
            <span class="error-message" id="form-error-message"></span>
          </div>
        </form>
      `;
			break;
		case "numbers":
			markup = `
      <form class="form numbers-form" id="numbersForm">
          <div class="numbers-form__grid" id="numbersFormGrid">
            <div class="numbers-form__header-row" id="numbersFormHeaderRow">
              <h3 class="numbers-form__heading wide-column">Child Name</h3>
              <h3 class="numbers-form__heading narrow-column">Numbers</h3>
              <h3 class="numbers-form__heading medium-column">Font Size</h3>
              <h3 class="numbers-form__heading narrow-column">Repeats</h3>
              <span class="narrow-column error-message" id="delete-btn-column"></h3>
            </div>
          </div>
          <div class="button-row">
            <button type="button" class="add-row-btn" id="numbersFormNewRowBtn"><img src="./img/plus-icon.png" alt="Add new row icon" class="icon"/>Add new row</button>
            <button type="submit" class="submit-btn"><img src="./img/tick-icon.png" alt="Submit form icon" class="icon" />Create printout</button>
            <span class="error-message" id="form-error-message"></span>
          </div>
        </form>
      `;
			break;
	}
	return markup;
};

export const namesFormRowMarkup = (id) => {
	const markup = `
  <div class="names-form__row" id="namesFormRow${id}">
    <div class="names-form__column wide-column">
      <input type="text" class="child-name" id="namesName${id}" />
    </div>
    <div class="names-form__column medium-column">
      <select class="font-size" id="namesSize${id}">
        <option value="large">Large</option>
        <option value="medium">Medium</option>
        <option value="small">Small</option>
      </select>
    </div>
    <div class="names-form__column narrow-column">
      <input type="number" min="1" max="20" value="1" step="1" class="repeats" id="namesRepeats${id}" />
    </div>
    <div class="names-form__column narrow-column">
      <button type="button" class="delete-row-btn" id="namesDelete${id}"><img src="./img/delete-icon.png" alt="Delete icon" class="icon"/>Delete</button>
    </div>
  </div>
  `;
	return markup;
};

export const wordsFormRowMarkup = (id) => {
	const markup = `
  <div class="words-form__row" id="wordsFormRow${id}">
    <div class="words-form__column wide-column">
      <input type="text" class="child-name" id="wordsName${id}" />
    </div>
    <div class="words-form__column wide-column">
      <input type="text" class="words" id="wordsWord${id}" />
    </div>
    <div class="words-form__column medium-column">
      <select class="font-size" id="wordsSize${id}">
        <option value="large">Large</option>
        <option value="medium">Medium</option>
        <option value="small">Small</option>
      </select>
    </div>
    <div class="words-form__column narrow-column">
     <input type="number" min="1" max="20" value="1" step="1" class="repeats" id="wordsRepeats${id}" />
    </div>
    <div class="words-form__column narrow-column">
      <button type="button" class="delete-row-btn" id="wordsDelete${id}"><img src="./img/delete-icon.png" alt="Delete icon" class="icon"/>Delete</button>
    </div>
  </div>
  `;
	return markup;
};

export const alphabetFormRowMarkup = (id) => {
	const markup = `
  <div class="alphabet-form__row" id="alphabetFormRow${id}">
    <div class="alphabet-form__column wide-column">
      <input type="text" class="child-name" id="alphabetName${id}" />
    </div>
    <div class="alphabet-form__column medium-column">
      <select class="select-case" id="alphabetCase${id}">
        <option value="upper">Upper</option>
        <option "value="lower">Lower</option>
      </select>
    </div>
    <div class="alphabet-form__column medium-column">
      <select class="font-size" id="alphabetSize${id}">
        <option value="large">Large</option>
        <option value="medium">Medium</option>
        <option value="small">Small</option>
      </select>
    </div>
    <div class="alphabet-form__column narrow-column">
      <input type="number" min="1" max="20" value="1" step="1" class="repeats" id="alphabetRepeats${id}" />
    </div>
    <div class="alphabet-form__column narrow-column">
      <button type="button" class="delete-row-btn" id="alphabetDelete${id}"><img src="./img/delete-icon.png" alt="Delete icon" class="icon"/>Delete</button>
    </div>
  </div>
  `;
	return markup;
};

export const numbersFormRowMarkup = (id) => {
	const markup = `
  <div class="numbers-form__row" id="numbersFormRow${id}">
    <div class="numbers-form__column wide-column">
    <input type="text" class="child-name" id="numbersName${id}" />
    </div>
    <div class="numbers-form__column narrow-column">
      <select class="select-numbers" id="numbersNumbers${id}">
        <option value="10">1-10</option>
        <option value="20">1-20</option>
      </select>
    </div>
    <div class="numbers-form__column medium-column">
      <select class="font-size" id="numbersSize${id}">
        <option value="large">Large</option>
        <option value="medium">Medium</option>
        <option value="small">Small</option>
     </select>
    </div>
    <div class="numbers-form__column narrow-column">
      <input type="number" min="1" max="20" value="1" step="1" class="repeats" id="numbersRepeats${id}" />
    </div>
    <div class="numbers-form__column narrow-column">
      <button type="button" class="delete-row-btn" id="numbersDelete${id}"><img src="./img/delete-icon.png" alt="Delete icon" class="icon"/>Delete</button>
    </div>
  </div>
  `;
	return markup;
};
