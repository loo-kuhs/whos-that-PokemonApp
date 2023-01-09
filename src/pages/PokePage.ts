import { defineComponent, ref } from "vue";
import PokeOptions from "../components/PokeOptions.vue";
import PokePicture from "../components/PokePicture.vue";

import getPokemonOptions from "../helpers/getPokemonOptions";
import { Pokemon } from "../interfaces/pokemon";

export default defineComponent({
  name: "PokePage",
  components: {
    PokeOptions,
    PokePicture,
  },
  setup: () => {
    const pokemonArray = ref<Pokemon[]>([]);
    const pokemon = ref<Pokemon>();
    const showPokemon = ref(false);
    const showAnswer = ref(false);
    const message = ref("");

    const mixPokemonArray = async () => {
      pokemonArray.value = await getPokemonOptions();

      const randomInt = Math.floor(Math.random() * 4);
      pokemon.value = pokemonArray.value[randomInt];
    };

    const checkAnswer = (selectedId: number) => {
      if (!pokemon.value) return;

      showPokemon.value = true;
      showAnswer.value = true;

      if (selectedId === pokemon.value.id) {
        message.value = `Correct!, ${pokemon.value.name}`;
      } else {
        message.value = `Wrong!, ${pokemon.value.name}`;
      }
    };

    const newGame = () => {
      showPokemon.value = false;
      showAnswer.value = false;
      pokemonArray.value = [];
      pokemon.value = undefined;
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