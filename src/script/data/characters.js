import _ from "lodash";
import axios from "axios";

export default class Characters {
  static getAll() {
    return axios
      .get("https://api.genshin.dev/characters", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const rawCharacters = res.data;
          const characters = rawCharacters.map((character) => ({
            name: _.startCase(_.camelCase(character)),
            endpoint: character,
            iconType: character.includes("traveler") ? "icon" : "icon-big",
          }));

          return characters;
        } else {
          console.log(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getDetail(characterEndpoint) {
    return axios
      .get(
        `https://api.genshin.dev/characters/${_.kebabCase(characterEndpoint)}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          const characterDetail = res.data;
          characterDetail.endpoint = characterEndpoint;
          characterDetail.iconType = characterEndpoint.includes("traveler")
            ? "icon"
            : "icon-big";

          return characterDetail;
        } else {
          console.log(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
