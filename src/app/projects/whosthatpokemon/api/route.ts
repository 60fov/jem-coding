import { cybr53 } from "@/util/hash";
import { NextResponse } from "next/server";
import { Pokemon } from "../types";
import WhosThatPokemon from "../whosthatpokemon";

type PostBody =
  | {
      type: "guess";
      pokehash: string;
      guess: string;
    }
  | {
      type: "new pokemon";
    };

type NewPokemonResponse = {
  pokehash: string;
  imgSrc: string;
};

export async function POST(request: Request) {
  const body = await request.json();
  const validation = validateRequestBody(body);

  if ("error" in validation) {
    return NextResponse.json(validation);
  }

  switch (validation.type) {
    case "guess": {
      const { pokehash, guess } = validation;
      return NextResponse.json({ correct: isGuessCorrect(pokehash, guess) });
    }
    case "new pokemon": {
      const pokemon = await WhosThatPokemon.fetch();
      const imgSrc =
        pokemon.sprites?.other?.["official-artwork"].front_default ?? "";
      const pokehash = cybr53(pokemon.name).toString(6);

      const responseBody: NewPokemonResponse = { pokehash, imgSrc };
      return NextResponse.json(responseBody);
    }
  }
}

function isGuessCorrect(hash: string, guess: string) {
  // TODO is this faster than converting hex to int then int compare? (doubt)
  return hash === cybr53(guess).toString(6);
}

// TODO should be validation lib
function validateRequestBody(body: unknown): { error: string } | PostBody {
  if (!body) {
    return { error: "missing body" };
  }
  if (typeof body !== "object") {
    return { error: "body is not an object" };
  }
  if (!("pokehash" in body)) {
    return { error: "missing pokehash" };
  }
  if (!("guess" in body)) {
    return { error: "missing guess" };
  }
  return body as PostBody;
}
