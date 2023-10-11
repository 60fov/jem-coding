import wordlist from "./wordlist";

export type JordleState = {
    jord: string,
    guesses: string[]
}


export function create() {
    return {
        jord: "",
        guesses: []
    } as JordleState
}

export function init(state: JordleState) {
    state.jord = randomWord()
}

export function guess(state: JordleState, guess: string) {

}

export function restart(state: JordleState) {

}

export function isGameOver(state: JordleState) {

}

export function guessedCorrect(state: JordleState) {

}

function randomWord() {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
}