import "./character-item.js";
import "./character-detail.js";
import "./content-nav.js";
import Characters from "../data/characters.js";

class CharacterList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.className =
      "container flex flex-row flex-wrap items-start justify-start w-[336px] xs:w-[448px] sm:w-[560px] md:w-[672px] lg:w-[896px]";
  }
  search(value) {
    if (!this._characters) {
      this._characters = [];
    }
    const result = this._characters.filter(function (character) {
      return character.name.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.render(result);
  }

  set characters(characters) {
    this._characters = characters;
    this.render(this._characters);
  }

  render(characters) {
    this.innerHTML = "";
    if (!characters.length) {
      this.innerHTML = `<h2 class="text-2xl">Character not found.</h2>`;
    }

    const contentElement = document.querySelector(".content");
    const inputSearchElement = document.querySelector("#input-search");
    const btnSearchElement = document.querySelector("#btn-search");
    const loadingElement = document.createElement("p");
    loadingElement.classList.add("text-2xl");
    loadingElement.innerText = "Loading...";
    const contentNavElement = document.createElement("content-nav");
    contentNavElement.buttonEvents = () => {
      this.classList.remove("hidden");
      if (document.querySelector("character-detail")) {
        var charDetailElement =
            document.getElementsByTagName("character-detail"),
          index;

        for (index = charDetailElement.length - 1; index >= 0; index--) {
          charDetailElement[index].parentNode.removeChild(
            charDetailElement[index]
          );
        }
      }
      contentNavElement.remove();
    };

    characters.forEach((character) => {
      const characterElement = document.createElement("character-item");
      characterElement.character = character;

      characterElement.addEventListener("click", () => {
        this.classList.add("hidden");
        inputSearchElement.disabled = true;
        btnSearchElement.disabled = true;
        contentElement.appendChild(loadingElement);

        const characterDetail = document.createElement("character-detail");
        Characters.getDetail(character.endpoint)
          .then((res) => {
            characterDetail.setCharacter(res).then((res) => {
              contentElement.appendChild(contentNavElement);
              contentElement.appendChild(characterDetail);
              loadingElement.remove();
              inputSearchElement.disabled = false;
              btnSearchElement.disabled = false;
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });

      this.appendChild(characterElement);
    });
  }
}

customElements.define("character-list", CharacterList);
