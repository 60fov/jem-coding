import JemDeck from "@/components/JemDeck";
import Svg from "@/components/SvgComponents";

const decks = [
  {
    name: "Programming Primitives",
    art: <Svg.Primitives />,
  },
  {
    name: "Computing Systems",
    art: <Svg.Cpu />,
  },
  {
    name: "Utilizing The Gpu",
    art: <Svg.Gpu />,
  },
  {
    name: "Netcode",
    art: <Svg.Globe />,
  },
]

export default function Page() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex gap-32">
        {
          decks.map(deck => {
            return (
              <JemDeck gap={12} cardCount={4} art={deck.art}>{deck.name}</JemDeck>
            )
          })
        }
      </div>
    </main>
  )
}