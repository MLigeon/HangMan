export const GUESS_LETTER = 'GUESS_LETTER'

export default (guessedLetter) => {
  return {
    type: GUESS_LETTER,
    payload: guessedLetter,
  }
}
