import { defineComponent, ref } from "vue";

import PokeOptions from "../components/PokeOptions.vue";
import PokePicture from "../components/PokePicture.vue";

import { usePokemonStore } from "../store/pokemonStore";

import getPokemonOptions from "../helpers/getPokemonOptions";
import { Pokemon } from "../interfaces/pokemon";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "PokePage",
  components: {
    PokeOptions,
    PokePicture,
  },
  setup: () => {
    const pokemonStore = usePokemonStore();
    const { pokemonArray, pokemon, showPokemon, showAnswer, message } =
      storeToRefs(pokemonStore);

    const mixPokemonArray = async () => {
      pokemonStore.loadPokemons(await getPokemonOptions());

      const randomInt = Math.floor(Math.random() * 4);
      pokemonStore.setHiddenPokemon(pokemonArray.value[randomInt]);
    };

    const checkAnswer = (selectedId: number) => {
      if (!pokemon.value) return;

      if (selectedId === pokemon.value.id) {
        pokemonStore.showPokemonAndAnswer(`Correct!, ${pokemon.value.name}`);
      } else {
        pokemonStore.showPokemonAndAnswer(
          `Wrong!, it was ${pokemon.value.name}`
        );
      }
    };

    const newGame = () => {
      pokemonStore.clearState();
      mixPokemonArray();
    };

    mixPokemonArray();

    return {
      /* Properties */
      pokemonArray,
      pokemon,
      showPokemon,
      showAnswer,
      message,

      /* Methods */
      mixPokemonArray,
      checkAnswer,
      newGame,
    };
  },
});
