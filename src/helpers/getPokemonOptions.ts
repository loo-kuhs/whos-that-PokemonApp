import pokeApi from "../api/pokemonApi";
import { Pokemon } from "../interfaces/pokemon";

const getPokemons = (): number[] => {
  const pokemonsArray = Array.from(Array(650));
  return pokemonsArray.map((_, index) => index + 1);
};

const getPokemonNames = async (pokemons: number[]): Promise<Pokemon[]> => {
  if (pokemons.length !== 4) throw `Pokemons must be 4`;
  const [a, b, c, d] = pokemons;

  const promiseArray = [
    pokeApi.get(`/${a}`),
    pokeApi.get(`/${b}`),
    pokeApi.get(`/${c}`),
    pokeApi.get(`/${d}`),
  ];

  const [pokemonA, pokemonB, pokemonC, pokemonD] = await Promise.all(
    promiseArray
  );

  return [
    {
      name: pokemonA.data.name,
      id: pokemonA.data.id,
    },
    {
      name: pokemonB.data.name,
      id: pokemonB.data.id,
    },
    {
      name: pokemonC.data.name,
      id: pokemonC.data.id,
    },
    {
      name: pokemonD.data.name,
      id: pokemonD.data.id,
    },
  ];
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));

  return pokemons;
};

export default getPokemonOptions;