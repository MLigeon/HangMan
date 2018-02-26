import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Hangman extends PureComponent {
  render() {
    const headClass = this.props.guessesLeft <= 5 ? 'is-visible' : '';
    const chestClass = this.props.guessesLeft <= 4 ? 'is-visible' : '';
    const leftArmClass = this.props.guessesLeft <= 3 ? 'is-visible' : '';
    const rightArmClass = this.props.guessesLeft <= 2 ? 'is-visible' : '';
    const leftLegClass = this.props.guessesLeft <= 1 ? 'is-visible' : '';
    const rightLegClass = this.props.guessesLeft === 0 ? 'is-visible' : '';

    return(
        <div className='hangman-container'>
          <div className='background'>
            <div className='top-pole'>
              <div></div>
            </div>
            <div className='side-pole'>
              <div></div>
            </div>
            <div className='rope'>
              <div></div>
            </div>
            <div className='head'>
              <div className={ headClass }></div>
            </div>
            <div className='body'>
              <div className='leftArm'>
                <div className={ leftArmClass }></div>
              </div>
              <div className='chest'>
                <div className={ chestClass }></div>
              </div>
              <div className='rightArm'>
                <div className={ rightArmClass }></div>
              </div>
              <div className="legs">
              <div className='leftLeg'>
                <div className={ leftLegClass }></div>
              </div>
              <div className='rightLeg'>
                <div className={ rightLegClass }></div>
              </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

const mapStateToProps = ({ guesses }) => {
  return {
    guessesLeft: guesses.guessesLeft
  }
}

export default connect(mapStateToProps)(Hangman)
