import Characters from "../data/characters";
import "../component/character-list.js";

const main = () => {
  const characterListElement = document.querySelector("character-list");
  const searchFormElement = document.querySelector("#form-search");
  const searchInputElement = document.querySelector("#input-search");

  Characters.getAll()
    .then((res) => {
      characterListElement.characters = res;
    })
    .catch((error) => {
      console.log(error);
    });

  const removeCharacterDetailElement = () => {
    if (
      document.querySelector("character-detail") ||
      document.querySelector("content-nav")
    ) {
      const charDetailElement =
        document.getElementsByTagName("character-detail");
      let index;

      for (index = charDetailElement.length - 1; index >= 0; index--) {
        charDetailElement[index].parentNode.removeChild(
          charDetailElement[index]
        );
      }

      document.querySelector("content-nav").remove();
    }
  };

  const searchCharacter = () => {
    const nameToBeSearch = searchInputElement.value;
    characterListElement.search(nameToBeSearch);
    characterListElement.classList.remove("hidden");

    removeCharacterDetailElement();
  };

  searchFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    searchCharacter();
  });

  searchInputElement.addEventListener("keyup", (e) => {
    e.preventDefault();
    searchCharacter();
  });
};

export default main;
