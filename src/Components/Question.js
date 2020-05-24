import React, {Component} from 'react';
import logo from './logo.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import queryString from 'query-string';

let songs = [];
let hours8 = [7, 10, 10, 30, 10, 10, 6];

class Question extends Component{

  constructor(props) {
    super(props);
    this.state = {
      favoriteArtist: null,
      favoriteGenre: 'hip-hop',
      favoriteSong: null,
      access_token: null
    }
    this.handlePlaylist = this.handlePlaylist.bind(this);
    this.getUserID = this.getUserID.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
    this.getPlaylistID = this.getPlaylistID.bind(this);
    this.populatePlaylist = this.populatePlaylist.bind(this);
    this.getRecommenedSongs = this.getRecommenedSongs.bind(this);
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.hash);
    this.setState({access_token: parsed.access_token});
  }

  async handlePlaylist() {
    await this.getRecommenedSongs()
    let userID = await this.getUserID()
    await this.createPlaylist(userID)
    let playlistID = await this.getPlaylistID()
    await this.populatePlaylist(playlistID)
  }

  async getUserID() {
    let response = await fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    })
    let data = await response.json()
    return data.id;
  }

  createPlaylist(userID) {
    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,  {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.access_token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Drop', public: false}),
    })
  }

  async getPlaylistID() {
    let response = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    })
    let data = await response.json()
    let id = null
    data.items.forEach(item => {if (item.name === 'Drop') id = item.id})
    return id
  }

  async getRecommenedSongs() {
    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[0]}&market=US&seed_genres=${this.state.favoriteGenre}&target_danceability=0.2&target_energy=0.2&min_popularity=30&target_tempo=60`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[1]}&market=US&seed_genres=${this.state.favoriteGenre}&target_danceability=0.4&target_energy=0.4&min_popularity=50&target_tempo=100`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))
    

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[2]}&market=US&seed_genres=${this.state.favoriteGenre}&target_danceability=0.6&target_energy=0.6&min_popularity=50&target_tempo=140`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))
    
    
    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[3]}&market=US&seed_genres=${this.state.favoriteGenre}&target_danceability=0.9&target_energy=0.9&min_popularity=70&target_tempo=180`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    
    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[4]}&market=US&seed_genres=${this.state.favoriteGenre}&target_danceability=0.6&target_energy=0.6&min_popularity=50&target_tempo=160`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[5]}&market=US&seed_genres=${this.state.favoriteGenre}&target_danceability=0.4&target_energy=0.4&min_popularity=50&target_tempo=140`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[6]}&market=US&seed_genres=${this.state.favoriteGenre}&target_danceability=0.4&target_energy=0.4&min_popularity=50&target_tempo=100`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    console.log(songs)
  }

  populatePlaylist(playlistID) {
    console.log(songs)
    return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,  {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.access_token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ uris: songs}),
    })
  }

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
            <header>What's your partys theme</header>  
            <img src={logo2} alt="Logo2" onClick={() => this.props.handleClick(2, 'shakira')}/>
          </div>
        )
      }
      else if (this.props.questionID === 2) {
        return(
          <div>
            <header>What's your favorite artist</header>  
            <img src={logo3} alt="Logo3" onClick={() => this.props.handleClick(3, 'hips dont lie')}/>
          </div>
        )
      }
      else if (this.props.questionID === 3) {
        return(
          <div>
            <header>Which song is your party anthem</header>  
              <img src={logo4} alt="Logo4" onClick={() => {
                this.handlePlaylist() 
                this.props.handleClick(4, 'this')}}/>
          </div>
        )
      }
      else if (this.props.questionID === 4) {
        return(
          <div>
            <header>Your playlist is ready</header>
          </div>
        )
      }
  }
}

export default Question;