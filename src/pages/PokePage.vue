<script src="./PokePage.ts" lang="ts" />

<template>
  <h1 v-if="!pokemon">Wait a moment, please...</h1>

  <div v-else>
    <h1>Who's that Pokémon?</h1>

    <PokePicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />

    <PokeOptions :pokemons="pokemonArray" @selection-pokemon="checkAnswer" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">New Game!</button>
    </template>
  </div>
</template>