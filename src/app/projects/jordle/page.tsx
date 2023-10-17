"use client";
// import * as Jordle from "@/projects/jordle";
import { useEffect, useRef, useState } from "react";

export default function JordlePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <JordleRenderer />
    </div>
  );
}

// the render fn
function JordleRenderer() {
  const jordle = useJordle();

  console.log("renderer", jordle);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      // handle submission
      const current_guess = e.currentTarget.value;
      jordle.makeGuess(current_guess);
    }
  }

  return (
    <div>
      <h1 className="text-3xl p-6">Jordle</h1>
      <div>{jordle.jord}</div>
      <div className="flex flex-col gap-1">
        {
          // number of guess
          Array.from({length: 5}).map((_, i) => {
            return (
              <div className="flex gap-1">
                {
                  Array.from({length: 5}).map((_, j) => {
                    return (
                      <div className="flex gap-1 bg-white/50 rounded w-4 h-6">{jordle.guesses[i][j]}</div>
                      )
                    })
                  }
              </div>
            )
          })
        }
        {/* {jordle.guesses.map((guess) => {
          // TODO guess letter logic
          return (
            <div className="flex gap-1">
              {guess.split("").map((letter) => {
                return <div className="bg-white/50 rounded w-4 h-6">{letter}</div>
              })}
            </div>
          )
          // return <div>{guess || "?"}</div>;
        })} */}
      </div>
      <input
        className="bg-transparent border-2 border-white/50 rounded p-2 leading-none outline-none focus-visible:border-white"
        id="guess"
        // onChange={(e) => console.log('on change', e)}
        // onInput={(e) => console.log('on input', e)}
        // onSubmit={(e) => console.log('on submit', e)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

// state management (in react)
function useJordle() {
  const [jord, setJord] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>(Array.from({ length: 6 }).map(() => "      "));
  // keep track of guessed letters

  useEffect(() => {
    setJord(Jordle.randomWord());
  }, []);

  function makeGuess(current_guess: string) {
    let guess_index: number | undefined = undefined;
    for (let guess of guesses) {
      if (guess == undefined) {
        guess_index = guesses.indexOf(guess);
      }
    }
    
    if (guess_index === undefined) {
      console.log("out of guesses")
      return;
    }

    guesses[guess_index] = current_guess;
    setGuesses([...guesses]);
    if (current_guess == jord) {
    }

    // const gi = guesses.findIndex((guess) => !Boolean(guess))
  }

  return {
    jord,
    guesses,
    makeGuess,
  };
}
