import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class CorrectGuesses extends PureComponent {
  render() {
    return(
      <div className='correctguesses'>
        <p className='text-center'>
          { this.props.letters.map( ({ letter, letterId }) => (
            <span className="label" key={ letterId }>{ letter }</span>
          ))}
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ guesses }) => {
  let letterId = 0
  return {
    letters: guesses.word.split('').map((letter) => {
      letterId += 1;
      const found = guesses.letters.find((inputLetter) => inputLetter.letter === letter);
      if(found || guesses.guessesLeft < 1) {
        return { letter, letterId }
      }
        return { letter: '.', letterId }
    })
  }
}

export default connect(mapStateToProps)(CorrectGuesses)
