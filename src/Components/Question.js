import React, {Component} from 'react';
import Artist from './Artist';
import Song from './Song';
import logo from './logo.png';
import pop from '../pop.png';
import disco from '../disco.png';
import hiphop from '../hip-hop.png';
import techno from '../techno.png';
import edm from '../edm.png';
import create from '../create.png'
import queryString from 'query-string';
import './Question.css';

let songs = [];
let favoriteArtist = null;
let favoriteSong = null;
let hours8 = [7, 10, 10, 30, 10, 10, 6];

class Question extends Component{

  constructor(props) {
    super(props);
    this.state = {
      favoriteGenre: null,
      access_token: null
    }
    this.handlePlaylist = this.handlePlaylist.bind(this);
    this.getUserID = this.getUserID.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
    this.getPlaylistID = this.getPlaylistID.bind(this);
    this.populatePlaylist = this.populatePlaylist.bind(this);
    this.getRecommenedSongs = this.getRecommenedSongs.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
    this.handleSong = this.handleSong.bind(this);
  }

  // Get and store the access_token that is located in the callback url
  componentDidMount() {
    let parsed = queryString.parse(window.location.hash);
    this.setState({access_token: parsed.access_token});
  }

  // Asyncronously make the necessary calls to build the playlist
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

  // Creates an playlist for the user
  createPlaylist(userID) {
    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,  {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.access_token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Drop', public: false}),
    })
  }

  // Get the spotify id of the playlist that was created by createPlaylist
  async getPlaylistID() {
    let response = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    })
    let data = await response.json()
    let id = null
    data.items.forEach(item => {if (item.name === 'Drop') id = item.id})
    return id
  }

  // Fetch songs with different attributes and store them in songs array
  async getRecommenedSongs() {
    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[0]}&market=US&seed_genres=${this.state.favoriteGenre}&seed_artists=${favoriteArtist}&seed_tracks=${favoriteSong}&target_danceability=0.2&target_energy=0.2&min_popularity=30&target_tempo=60`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[1]}&market=US&seed_genres=${this.state.favoriteGenre}&seed_artists=${favoriteArtist}&seed_tracks=${favoriteSong}&target_danceability=0.4&target_energy=0.4&min_popularity=50&target_tempo=100`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))
    

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[2]}&market=US&seed_genres=${this.state.favoriteGenre}&seed_artists=${favoriteArtist}&seed_tracks=${favoriteSong}&target_danceability=0.6&target_energy=0.6&min_popularity=50&target_tempo=140`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))
    
    
    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[3]}&market=US&seed_genres=${this.state.favoriteGenre}&seed_artists=${favoriteArtist}&seed_tracks=${favoriteSong}&target_danceability=0.9&target_energy=0.9&min_popularity=70&target_tempo=180`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    
    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[4]}&market=US&seed_genres=${this.state.favoriteGenre}&seed_artists=${favoriteArtist}&seed_tracks=${favoriteSong}&target_danceability=0.6&target_energy=0.6&min_popularity=50&target_tempo=160`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[5]}&market=US&seed_genres=${this.state.favoriteGenre}&seed_artists=${favoriteArtist}&seed_tracks=${favoriteSong}&target_danceability=0.4&target_energy=0.4&min_popularity=50&target_tempo=140`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))

    await fetch(`https://api.spotify.com/v1/recommendations?limit=${hours8[6]}&market=US&seed_genres=${this.state.favoriteGenre}&seed_artists=${favoriteArtist}&seed_tracks=${favoriteSong}&target_danceability=0.4&target_energy=0.4&min_popularity=50&target_tempo=100`, {
      headers: {'Authorization': 'Bearer ' + this.state.access_token}
    }).then(response => response.json())
    .then(data => data.tracks.forEach(track => songs.push(track.uri)))
  }

  // Populates the playlist with the fetched songs 
  populatePlaylist(playlistID) {
    console.log(songs)
    return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,  {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + this.state.access_token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ uris: songs}),
    })
  }

  // Store the chosen artist
  handleArtist(artist) {
    favoriteArtist = artist
  }

  // Store the chosen song 
  handleSong(song) {
    favoriteSong = song
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
      // Render genres, store the answer by udating state
      else if (this.props.questionID === 1) {
        return(
          <div>
            <div class="header">What's your party's theme</div>
            <div class="genre">
              <div class="question">
                <img src={pop} alt="pop" onClick={() => {this.props.handleClick(2)
                                                          this.setState({favoriteGenre: 'pop'})}}/>
                <div class="desc">Pop</div>
              </div>
              <div class="question">
                <img src={disco} alt="disco" onClick={() => {this.props.handleClick(2)
                                                            this.setState({favoriteGenre: 'disco'})}}/>
                <div class="desc">Disco</div>
              </div>
              <div class="question">
                <img src={hiphop} alt="hip-hop" onClick={() => {this.props.handleClick(2)
                                                            this.setState({favoriteGenre: 'hip-hop'})}}/>
                <div class="desc">Hip-Hop</div>
              </div>
              <div class="question">
                <img src={techno} alt="techno" onClick={() => {this.props.handleClick(2)
                                                            this.setState({favoriteGenre: 'techno'})}}/>
                <div class="desc">Techno</div>
              </div>
              <div class="question">
                <img src={edm} alt="edm" onClick={() => {this.props.handleClick(2)
                                                          this.setState({favoriteGenre: 'edm'})}}/>
                <div class="desc">EDM</div>
              </div>
            </div>
          </div>
        )
      }
      // Render the artists
      else if (this.props.questionID === 2) {
        return(
          <Artist genre = {this.state.favoriteGenre} handleClick = {this.props.handleClick} handleArtist = {this.handleArtist}/>
        )
      }
      // Render the songs
      else if (this.props.questionID === 3) {
        return(
          <Song genre = {this.state.favoriteGenre} handleClick = {this.props.handleClick} handleSong = {this.handleSong}/>
        )
      }
      // Make all the necessary calls to the Spotify API to create the playlist
      else if (this.props.questionID === 4) {
        return(
          <div>
            <div class="header4">Press the button below to create your playlist</div>
            <img src={create} alt="create" style={{ height: 40, width: 245}} class="centered"onClick={() => {this.handlePlaylist()
                                                                          this.props.handleClick(5)}}/>
          </div>
        )
      }
      else if (this.props.questionID === 5) {
        return(
          <div>
            <div class="header2">Your playlist is ready !</div>
            <div class="header3">Check your account to listen</div>
          </div>
        )
      }
  }
}

export default Question;