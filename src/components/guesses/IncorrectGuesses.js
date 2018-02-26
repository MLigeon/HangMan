import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class IncorrectGuesses extends PureComponent {

  render() {
    const {guesses} = this.props;

    if (guesses.length === 0) {
      return null
    }
    
    return(
      <div>
        <h3 className='text-center'>Incorrect Letters</h3>
        <p className='text-center'>
          {guesses.map(({ letter }, index) => {
            return(
              <span className="label" key={index}>{ letter }</span>
            )
          })}
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ guesses }) => {
  return{
    guesses: guesses.letters.filter(guess => !guess.isCorrect)
  }
}

export default connect(mapStateToProps)(IncorrectGuesses)
