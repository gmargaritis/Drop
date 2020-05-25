import React, {Component} from 'react';

import michael from '../michael.png';
import madonna from '../madonna.png';
import beyonce from '../beyonce.png';
import rihanna from '../rihanna.png';

import donna from '../donna.png'
import chic from '../chic.png'
import beegees from '../beegees.png'
import boneym from '../boneym.png'

import kanye from '../kanye.png';
import drake from '../drake.png';
import scott from '../scott.png';
import rocky from '../rocky.png';

import artbat from '../artbat.png';
import schwefelgelb from '../schwefelgelb.png';
import amelie from '../amelie-lens.png';
import solomun from '../solomun.png';

import deadmau5 from '../deadmau5.png';
import avicii from '../avicii.png';
import marshmello from '../marshmello.png';
import martin from '../martin.png';

class Song extends Component{

  render(){
    if (this.props.genre === 'pop') {
      return(
        <div>
        <header>What's your party anthem</header>
        <div>
          <img src={michael} alt="Michael Jackson" onClick={() => {this.props.handleClick(4)
                                                                   this.props.handleSong('5ChkMS8OtdzJeqyybCc9R5')}}/>
          <div>Billie Jean</div>
        </div>
        <div>
          <img src={madonna} alt="Madonna" onClick={() => {this.props.handleClick(4)
                                                           this.props.handleSong('1ZPlNanZsJSPK5h9YZZFbZ')}}/>
          <div>Like a Virgin</div> 
        </div>
        <div>
          <img src={beyonce} alt="Beyonce" onClick={() => {this.props.handleClick(4)
                                                           this.props.handleSong('0TwBtDAWpkpM3srywFVOV5')}}/>   
          <div>Crazy In Love</div> 
        </div>
        <div>
          <img src={rihanna} alt="Rihanna" onClick={() => {this.props.handleClick(4)
                                                           this.props.handleSong('0NTMtAO2BV4tnGvw9EgBVq')}}/>
          <div>Bitch Better Have My Money</div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'disco') {
      return(
        <div>
        <header>What's your party anthem</header>
        <div>
          <img src={donna} alt="Donna Summer" onClick={() => {this.props.handleClick(4)
                                                              this.props.handleSong('2zMJN9JvDlvGP4jB03l1Bz')}}/>
          <div>Hot StuffSummer</div>
        </div>
        <div>
          <img src={chic} alt="CHIC" onClick={() => {this.props.handleClick(4)
                                                     this.props.handleSong('3ClOMebBxeNTYCOfTH24YJ')}}/>
          <div>Le Freak</div> 
        </div>
        <div>
          <img src={beegees} alt="Bee Gees" onClick={() => {this.props.handleClick(4)
                                                            this.props.handleSong('3mRM4NM8iO7UBqrSigCQFH')}}/>
          <div>Stayin' Alive</div> 
        </div>
        <div>
          <img src={boneym} alt="Boney M" onClick={() => {this.props.handleClick(4)
                                                          this.props.handleSong('5jkFvD4UJrmdoezzT1FRoP')}}/>
          <div>Rasputin</div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'hip-hop') {
      return(
        <div>
        <header>What's your party anthem</header>
        <div>
          <img src={kanye} alt="Kanye" onClick={() => {this.props.handleClick(4)
                                                       this.props.handleSong('722tgOgdIbNe3BEyLnejw4')}}/>
          <div>Black Skinhead</div>
        </div>
        <div>
          <img src={drake} alt="Drake" onClick={() => {this.props.handleClick(4)
                                                       this.props.handleSong('6DCZcSspjsKoFjzjrWoCdn')}}/>
          <div>God's Plan</div> 
        </div>
        <div>
          <img src={scott} alt="Scott" onClick={() => {this.props.handleClick(4)
                                                      this.props.handleSong('2xLMifQCjDGFmkHkpNLD9h')}}/>    
          <div>SICKO MOD</div> 
        </div>
        <div>
          <img src={rocky} alt="Rocky" onClick={() => {this.props.handleClick(4)
                                                      this.props.handleSong('7ycWLEP1GsNjVvcjawXz3z')}}/>
          <div>Praise The Lord (Da Shine)</div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'techno') {
      return(
        <div>
        <header>What's your party anthem</header>
        <div>
          <img src={artbat} alt="ARTBAT" onClick={() => {this.props.handleClick(4)
                                                        this.props.handleSong('0gwNGHcBRYtF7mvgUczVo1')}}/>
          <div>Return to Oz</div>
        </div>
        <div>
          <img src={schwefelgelb} alt="Schwefelgelb" onClick={() => {this.props.handleClick(4)
                                                                    this.props.handleSong('226BBGoWgtoh9Tr6WQdoad')}}/>
          <div>Es zieht mich</div> 
        </div>
        <div>
          <img src={amelie} alt="Amelie Lens" onClick={() => {this.props.handleClick(4)
                                                              this.props.handleSong('5UsfWcP6SThHlZ4oAgx7ge')}}/>
          <div>Follow</div> 
        </div>
        <div>
          <img src={solomun} alt="Solomun" onClick={() => {this.props.handleClick(4)
                                                          this.props.handleSong('43mulJ5Q7ECMNpqpmtflNt')}}/>
          <div>The Way Back</div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'edm') {
      return(
        <div>
        <header>What's your party anthem</header>
        <div>
          <img src={deadmau5} alt="Deadmau5" onClick={() => {this.props.handleClick(4)
                                                            this.props.handleSong('4ua0IepBEISCWwF8dTJvcU')}}/>
          <div>Ghosts 'n' Stuff</div>
        </div>
        <div>
          <img src={avicii} alt="Avicii" onClick={() => {this.props.handleClick(4)
                                                         this.props.handleSong('0ct6r3EGTcMLPtrXHDvVjc')}}/>
          <div>The Nights</div> 
        </div>
        <div>
          <img src={marshmello} alt="Marshmello" onClick={() => {this.props.handleClick(4)
                                                                this.props.handleSong('0tBbt8CrmxbjRP0pueQkyU')}}/>
        </div>
        <div>
          <img src={martin} alt="Martin Garrix" onClick={() => {this.props.handleClick(4)
                                                                this.props.handleSong('4ut5G4rgB1ClpMTMfjoIuy')}}/>
          <div>High On Life (feat. Bonn)</div>
        </div>
      </div>
      )
    }
  }
}


export default Song;