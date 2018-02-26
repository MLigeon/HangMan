import { GUESS_LETTER } from '../actions/guesses'

const wordCollection = ['VOLVO', 'TOYOTA', 'VOLKSWAGEN', 'AUDI', 'MERCEDES', 'BMW'];


function lettersLeft(word, guessedLetters) {
  const remainingLetters = word.split('').filter((letter) => {
    const guessedLetter = guessedLetters.find((inputLetter) => inputLetter.letter === letter) || {};
    if(guessedLetter.isCorrect){
      return false;
    }
    return true;
  });
  return remainingLetters.length;
}

const randomWord = wordCollection[Math.floor(Math.random() * wordCollection.length)];
const initialState = {
  word: randomWord,
  guessesLeft: 6,
  letters: [],
  remainingLetters: lettersLeft(randomWord, [])
}

const guesses = (state = initialState, { type, payload} = {}) => {
  switch(type) {

    case GUESS_LETTER:
      const newLetter = {
        letter: payload,
        isCorrect: state.word.indexOf(payload) !== -1,
      }

      let guessesLeft = state.guessesLeft;
      
      if(!newLetter.isCorrect) {
        guessesLeft -= 1
      }

      const newLetterConcat = state.letters.concat(newLetter);
      const newState = Object.assign({}, state, {
        letters: newLetterConcat,
        remainingLetters: lettersLeft(randomWord, newLetterConcat),
        guessesLeft
      })

      return newState;

    default:
      return state
  }


}

export default guesses
