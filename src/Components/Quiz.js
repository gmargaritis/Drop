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

  handleClick(questionID, answer) {
    this.setState({
      currentQuestion: questionID
    });
    this.changeAnswer(answer)
  }

  changeAnswer(answer) {
    answers.push(answer)
    console.log(answers)
  }

  render() {
    return(
      <div>
        <Question handleClick = {this.handleClick} questionID = {this.state.currentQuestion}/>
      </div>
    );
  }
}

export default Quiz;


