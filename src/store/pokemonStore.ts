import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    hola: "mundo",
  }),
  actions: {},
});