"use client"


import Pokemon from "./Pokemon"

export default function WTPPage() {

  function onSubmit(pokemon: string) {
    fetch("whosthatpokemon/api/", {
      method: "POST",
      body: JSON.stringify({
        type: "new pokemon",
      })
    })
  }

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <div className="w-48">
        <Pokemon />
      </div>
      <div>
        <Input onSubmit={onSubmit} />
      </div>
      {/* <span className="text-center">
        {pokemon.name}
      </span> */}
    </div>
  )
}

function Input(props: { onSubmit: (pokemon: string) => void }) {
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      const pokemon = e.currentTarget.value
      props.onSubmit(pokemon)
    }
  }
  return (
    <input
      onKeyDown={onKeyDown}
      className="bg-white text-indigo-600 text-lg font-semibold w-full border-white border-2 p-2 leading-none rounded shadow-sm outline-none focus-visible:translate-x-1 focus-visible:-translate-y-1 focus-visible:shadow-md transition-all"
    />
  )
}