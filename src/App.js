import React, { Component } from 'react'
import './App.css'
import GuessInput from './components/guesses/GuessInput'
import CorrectGuesses from './components/guesses/CorrectGuesses'
import IncorrectGuesses from './components/guesses/IncorrectGuesses'
import Hangman from './components/hangman/Hangman'


class App extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='guesses'>
            <CorrectGuesses />
          </div>
          <div className='hangman'>
            <Hangman />
            <GuessInput />
            <IncorrectGuesses />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
