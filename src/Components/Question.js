import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from './logo.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';

class Question extends Component{

  render() {
      if (!this.props.questionID) {
        return(
          <div>
            <header>What's the length of your party</header>  
            <img src={logo} alt="Logo" onClick={() => this.props.handleClick(1, 'pop')}/>
            <img src={logo} alt="Logo"/>
            <img src={logo} alt="Logo"/>
            <img src={logo} alt="Logo"/>
          </div>
        )
      }
      else if (this.props.questionID === 1) {
        return(
          <div>
            <header>Question1</header>  
            <img src={logo2} alt="Logo2" onClick={() => this.props.handleClick(2, 'shakira')}/>
          </div>
        )
      }
      else if (this.props.questionID === 2) {
        return(
          <div>
            <header>Question1</header>  
            <img src={logo3} alt="Logo3" onClick={() => this.props.handleClick(3, 'hips dont lie')}/>
          </div>
        )
      }
      else if (this.props.questionID === 3) {
        return(
          <div>
            <header>Question1</header>  
            <Link to="/completed">
              <img src={logo4} alt="Logo4" onClick={() => this.props.handleClick(4)}/>
            </Link>
          </div>
        )
      }
  }
}

export default Question;