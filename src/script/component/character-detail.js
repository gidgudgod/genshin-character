import _ from "lodash";

class CharacterDetail extends HTMLElement {
  constructor() {
    super();
  }

  setCharacter(character) {
    return new Promise((resolve, reject) => {
      this._character = character;
      this.render().then((res) => {
        resolve("Ready");
      });
    });
  }

  render() {
    return new Promise((resolve, reject) => {
      let rarityStars = "";
      for (let i = 0; i < this._character.rarity; i++) {
        rarityStars += "⭐";
      }
      this.innerHTML = `<div
        class="character flex flex-col justify-center px-4 slg:px-0 slg:flex-row slg:justify-around"
        id="character-id"
      >
        <div class="character-cover w-full p-0 rounded-lg bg-accent mb-4 slg:w-[calc(60%-2rem)] md:p-6 slg:p-6 slg:mb-6">
          <img
            src="https://api.genshin.dev/characters/${_.kebabCase(
              this._character.endpoint
            )}/card"
            class="rounded-lg w-full"
            id="cover-character"
          />
        </div>
        <div class="character-description w-full flex flex-col justify-start slg:w-[40%]">
          <div class="character-profile flex flex-col items-center self-start space-y-2 w-full mb-4 p-4 pl-6 rounded-lg bg-accent">
            <div class="character-header flex flex-row space-x-4 w-full">
              <div class="shrink-0">
                <img
                  src="https://api.genshin.dev/characters/${_.kebabCase(
                    this._character.endpoint
                  )}/${this._character.iconType}"
                  alt=""
                  class="character-icon w-28 h-28 rounded-full bg-base object-cover object-top shadow-md shadow-yellow-800/30"
                  id="icon-character"
                />
              </div>
              <div class="character-title flex flex-col justify-center w-1/2">
                <h3
                  class="character-name break-words text-2xl leading-5 font-bold text-secondary"
                  id="name-character"
                >
                ${this._character.name}
                </h3>
                <h3 class="character-type text-lg font-semibold text-slate-600">
                  <span class="character-vision" id="vision-character">
                  ${this._character.vision}
                  </span>
                  &nbsp;•&nbsp;
                  <span class="character-weapon" id="weapon-character">
                  ${this._character.weapon}
                  </span>
                </h3>
                <div class="character-rarity" id="rarity-character">
                  ${rarityStars} 
                </div>
              </div>
            </div>
            <div class="character-details flex flex-col w-full justify-start text-left text-md text-slate-600">
              <table class="border-collapse table-fixed">
                <tbody>
                  <tr class="leading-normal">
                    <td class="font-semibold align-top">Title</td>
                    <td class="leading-tight" id="title-character">
                    ${this._character.title ? this._character.title : "-"}
                    </td>
                  </tr>
                  <tr class="leading-normal">
                    <td class="font-semibold align-top">Nation</td>
                    <td class="leading-tight" id="nation-character">
                    ${this._character.nation}
                    </td>
                  </tr>
                  <tr class="leading-normal">
                    <td class="font-semibold align-top">Affiliation</td>
                    <td class="leading-tight" id="affiliation-character">
                    ${this._character.affiliation}
                    </td>
                  </tr>
                  <tr class="leading-normal">
                    <td class="font-semibold w-28 align-top">Constellation</td>
                    <td class="leading-tight" id="constellation-character">
                    ${this._character.constellation}
                    </td>
                  </tr>
                  <tr class="leading-normal">
                    <td class="font-semibold align-top">Birthday</td>
                    <td class="leading-tight" id="birthday-character">
                    ${this._character.birthday ? this._character.birthday : "-"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="character-constellations flex flex-col w-full space-y-2 mb-4 p-3 pl-6 rounded-lg bg-accent text-slate-600 text-left">
            <h3 class="text-secondary font-bold text-lg">Constellations</h3>
            <table class="constellation-list border-collapse table-fixed">
              <tbody>
                <tr class="leading-normal">
                  <td class="font-semibold align-top">C1</td>
                  <td class="leading-tight" id="name-c1">
                  ${this._character.constellations[0].name}
                  </td>
                </tr>
                <tr class="leading-normal">
                  <td class="font-semibold align-top">C2</td>
                  <td class="leading-tight" id="name-c2">
                  ${this._character.constellations[1].name}
                  </td>
                </tr>
                <tr class="leading-normal">
                  <td class="font-semibold align-top">C3</td>
                  <td class="leading-tight" id="name-c3">
                  ${this._character.constellations[2].name}
                  </td>
                </tr>
                <tr class="leading-normal">
                  <td class="font-semibold w-8 align-top">C4</td>
                  <td class="leading-tight" id="name-c4">
                  ${this._character.constellations[3].name}
                  </td>
                </tr>
                <tr class="leading-normal">
                  <td class="font-semibold align-top">C5</td>
                  <td class="leading-tight" id="name-c5">
                  ${this._character.constellations[4].name}
                  </td>
                </tr>
                <tr class="leading-normal">
                  <td class="font-semibold align-top">C6</td>
                  <td class="leading-tight" id="name-c6">
                  ${this._character.constellations[5].name}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

      Promise.all(
        Array.from(this.getElementsByTagName("img"))
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise((resolve) => {
                img.onload = img.onerror = resolve;
              })
          )
      ).then(() => {
        resolve("Ready");
      });
    });
  }
}

customElements.define("character-detail", CharacterDetail);
