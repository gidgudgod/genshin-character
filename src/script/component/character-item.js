class CharacterItem extends HTMLElement {
  constructor() {
    super();
  }

  set character(character) {
    this._character = character;
    this.render();
  }

  render() {
    this.setAttribute("id", `${this._character.endpoint}`);

    this.innerHTML = `
      <a href="#" class="group flex flex-col w-28 space-y-2 p-4 items-center">
        <img
            src="https://api.genshin.dev/characters/${this._character.endpoint}/${this._character.iconType}"
            alt="${this._character.endpoint}"
            class="character-icon w-16 h-16 object-cover object-top rounded-full border-2 border-secondary bg-base ring-2 ring-primary shadow-sm shadow-black-200 ease-in-out duration-150 group-hover:ring-4 "
          />
        <h3
          class="character-name w-full text-center text-ellipsis overflow-x-clip font-semibold text-secondary leading-tight ease-in-out duration-150 group-hover:text-blue-900"
        >
        
          ${this._character.name}
        </h3>      
      </a>       
    `;
  }
}

customElements.define("character-item", CharacterItem);
