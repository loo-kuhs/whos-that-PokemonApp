<template>
  <div class="pokemon-container">
    <img
      class="hidden-pokemon"
      v-if="!showPokemon"
      :src="imgSrc"
      alt="pokemon"
    />

    <img class="fade-in" v-else :src="imgSrc" alt="pokemon" />
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "../composables/usePokemons";

const { showPokemon, imgSrc } = usePokemons();
</script>

<style scoped>
.pokemon-container {
  height: 12.5rem;
}

img {
  height: 12.5rem;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>
