import Image from "next/image"

export default async function WTPPage() {

  const pokeid = 151
  const pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`, {
    method: "GET",
    // cache: "force-cache",
  })).json() as unknown as Pokemon
  console.log(JSON.stringify(pokemon, null, 4))
  const src = pokemon.sprites?.other?.["official-artwork"].front_default ?? ""

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <div className="w-48">
        <Image
          // className="object-contain"
          src={src}
          width={475}
          height={475}
          alt={pokemon.name}
          priority={true} />
      </div>
      <span className="text-center">
        {pokemon.name}
      </span>
    </div>
  )
}

// url eg. "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png"

type Pokemon = {
  name: string
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other?: {
      dream_world: {
        front_default: string | null
        front_female: string | null
      }
      "official-artwork": {
        front_default: string | null
      }
      home: {
        front_default: string | null
        front_female: string | null
        front_shiny: string | null
        front_shiny_female: string | null
      }
    }
  }
}