import React, {Component} from 'react';
import Question from './Question';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  // Update current question's state
  handleClick(questionID) {
    this.setState({
      currentQuestion: questionID
    });
  }
  render() {
    return(
      <div>
        <Question handleClick = {this.handleClick}  questionID = {this.state.currentQuestion} access_token = {this.state.access_token}/>
      </div>
    );
  }
}

export default Quiz;


