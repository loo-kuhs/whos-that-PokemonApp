import { defineStore } from "pinia";
import { Pokemon } from "../interfaces/pokemon";

interface PokemonState {
  pokemonArray: Pokemon[];
  pokemon: Pokemon | undefined;
  showPokemon: boolean;
  showAnswer: boolean;
  message: string;
}

export const usePokemonStore = defineStore("pokemon", {
  state: (): PokemonState => ({
    pokemonArray: [],
    pokemon: undefined,
    showPokemon: false,
    showAnswer: false,
    message: "",
  }),
  actions: {
    loadPokemons(pokemons: Pokemon[]) {
      this.pokemonArray = pokemons;
    },
    setHiddenPokemon(pokemon: Pokemon) {
      this.pokemon = pokemon;
    },
    showPokemonAndAnswer(message: string) {
      this.showAnswer = true;
      this.showPokemon = true;
      this.message = message;
    },
    clearState() {
      this.pokemonArray = [];
      this.pokemon = undefined;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
    }
  },
});