import { defineComponent } from "vue";

import PokeOptions from "../components/PokeOptions.vue";
import PokePicture from "../components/PokePicture.vue";

import { usePokemons } from "../composables/usePokemons";

export default defineComponent({
  name: "PokePage",
  components: {
    PokeOptions,
    PokePicture,
  },
  setup: () => {
    const {
      pokemonArray,
      pokemon,
      showPokemon,
      showAnswer,
      message,
      mixPokemonArray,
      checkAnswer,
      newGame,
    } = usePokemons();

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