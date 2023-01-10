<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="checkAnswer(pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "../composables/usePokemons";

const { pokemonArray: pokemons, checkAnswer } = usePokemons();
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #E93124;
  border-radius: 0.3125rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 0.625rem;
  width: 15.625rem;
}

li:hover {
  background-color: #86c7dc44;
}

.options-container {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>