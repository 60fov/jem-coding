import { Pokemon } from "./types";

// TODO options
async function whosThatPokemonFetch(id?: string, options?: { gen: number }) {
  const pokeid = id || Math.floor(Math.random() * 151 + 1);
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`, {
    method: "GET",
    cache: "force-cache",
  });
  return (await resp.json()) as unknown as Pokemon;
}

function whosThatPokemonGetImageSrc(pokemon: Pokemon, artwork?: string) {
  return pokemon.sprites?.other?.["official-artwork"].front_default ?? "";
}

const WhosThatPokemon = {
  fetch: whosThatPokemonFetch,
  getImageSrc: whosThatPokemonGetImageSrc,
};

export default WhosThatPokemon;
