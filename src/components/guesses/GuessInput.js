import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import guessLetter from '../../actions/guesses'
import Message  from '../../components/Message'

class GuessInput extends PureComponent {

	constructor(props){
		super(props)
		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		const {value} = this.state;
		const {submitValue} = this.props;

		submitValue(value);
		this.setState({value: ''});
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		const { value } = this.state;
		const { guessesLeft, remainingLetters } = this.props;

		if(remainingLetters === 0) {
			return (
				<Message type='winMessage' message='You won!'/>
			)
		}
		else if (!guessesLeft > 0) {
			return (
				<Message type='lostMessage' message='Bummer... You lost!'/>
			);
		}
		return (
			<div>
				<h3 className="instruction-text">Guess the word</h3>
				<form onSubmit={this.handleSubmit}>
	        <input className="text-input" maxLength='1' value={ value } onChange={this.handleChange} />
	        <p className="text-center">
						<button type="submit" className="btn-large">Submit</button>
					</p>
				</form>
      </div>
		)
	}

}


const mapStateToProps = ({ guesses }) => {
	return {
		remainingLetters: guesses.remainingLetters,
		guessesLeft: guesses.guessesLeft,
		letters: guesses.letters,
		word: guesses.word,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitValue: (letter) => dispatch(guessLetter(letter.toUpperCase()))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessInput)
