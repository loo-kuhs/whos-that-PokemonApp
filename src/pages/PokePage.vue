<template>
  <h1 v-if="!pokemon">Wait a moment, please...</h1>

  <div v-else>
    <h1>Who's that Pokémon?</h1>

    <PokePicture />
    <PokeOptions />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">New Game!</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "../composables/usePokemons";

import PokeOptions from "../components/PokeOptions.vue";
import PokePicture from "../components/PokePicture.vue";

const { pokemon, showAnswer, message, mixPokemonArray, newGame } =
  usePokemons();

mixPokemonArray();
</script>