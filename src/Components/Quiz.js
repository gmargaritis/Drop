import React, {Component} from 'react';
import Question from './Question';
import queryString from 'query-string';

let answers = [];

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: null,
      access_token: null,
      user_id: null,
      playlist_id: null
    }
     this.handleClick = this.handleClick.bind(this);
     this.changeAnswer = this.changeAnswer.bind(this);
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.hash);
    this.setState({access_token: parsed.access_token});
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

  getUserID() {
    fetch('https://api.spotify.com/v1/me', {headers: {'Authorization': 'Bearer ' + this.state.access_token}})
      .then(response => response.json())
      .then(data => this.setState({
        user_id: data.id
      }))
  }

  createPlaylist() {
    fetch(`https://api.spotify.com/v1/users/${this.state.user_id}/playlists`,  {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.access_token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Drop', public: false}),
    })
  }

  getPlaylistID() {
    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.items.forEach(item => (item.name === 'Drop') && this.setState({
      playlist_id: item.id
    })))
  }

  populatePlaylist() {
    fetch(`https://api.spotify.com/v1/playlists/${this.state.playlist_id}/tracks`,  {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.access_token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ uris: ['spotify:track:1301WleyT98MSxVHPZCA6M']}),
    })
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


