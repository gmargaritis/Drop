
import React, { Component } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import connect from './connect.png';
import logo from './logo.png';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      access_token: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    window.location = 'https://accounts.spotify.com/authorize?client_id=8bbbfbeebb874b4dae4e6445fb614d02&redirect_uri=https://drop-playlists.netlify.app/quiz/&scope=user-read-private%20playlist-modify-private%20playlist-read-private&response_type=token'
  }

  render() {
    return(
      <Router>
        <Route path="/" exact>
          <div className="App">
            <img src={logo} alt="Logo" style={{ height: 600, width: 1200}} className="logo"/>
            <img src={connect} alt="Connect" style={{ height: 40, width: 245}} className="centered" onClick={this.handleClick}/>
          </div>
        </Route>
        <Route path="/quiz">
          <Quiz/>
        </Route>
      </Router>
    )
  }
}

export default App;