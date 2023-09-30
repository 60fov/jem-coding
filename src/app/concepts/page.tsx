import JemDeck from "@/components/JemDeck";

export default function Page() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <JemDeck gap={12} cardCount={4}>Programming Primitives</JemDeck>
    </main>
  )
}