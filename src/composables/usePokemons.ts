import { storeToRefs } from "pinia";
import getPokemonOptions from "../helpers/getPokemonOptions";
import { usePokemonStore } from "../store/pokemonStore";

export const usePokemons = () => {
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
      pokemonStore.showPokemonAndAnswer(`Wrong!, it was ${pokemon.value.name}`);
    }
  };

  const newGame = () => {
    pokemonStore.clearState();
    mixPokemonArray();
  };

  return {
    /* Properties */
    pokemonArray,
    pokemon,
    showPokemon,
    showAnswer,
    message,

    /* Methods */
    checkAnswer,
    mixPokemonArray,
    newGame,
  };
};