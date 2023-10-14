import Image from "next/image"
import WhosThatPokemon from "./whosthatpokemon"

export default async function Pokemon(props: { name?: string, id?: string }) {

    const pokemon = await WhosThatPokemon.fetch(props?.name || props?.id)
    const src = WhosThatPokemon.getImageSrc(pokemon)

    return (
        <Image
            // className="object-contain"
            src={src}
            width={475}
            height={475}
            alt={pokemon.name}
            priority={true}
        />
    )
}