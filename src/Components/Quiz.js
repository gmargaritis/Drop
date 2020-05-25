import React, {Component} from 'react';
import Question from './Question';

let answers = [];

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  handleClick(questionID) {
    this.setState({
      currentQuestion: questionID
    });
    //this.changeAnswer(answer)
  }

  changeAnswer(answer) {
    answers.push(answer)
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


