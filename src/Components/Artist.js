import React, {Component} from 'react';
import './Question.css'

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




class Artist extends Component{
    //  Render the artists based on the chosen genre
  render(){
    // Call handleClick to udpate the number of the next question
    // Call handleArtist to store artists uri
    if (this.props.genre === 'pop') {
      return(
        <div>
        <div class="header">What's your favorite artist</div>
        <div class="align-center">
          <div class="question">
            <img src={michael} alt="Michael Jackson" onClick={() => {this.props.handleClick(3)
                                                                    this.props.handleArtist('3fMbdgg4jU18AjLCKBhRSm')}}/>
            <div class="desc">Michael Jackson</div>
          </div>
          <div class="question">
            <img src={madonna} alt="Madonna" onClick={() => {this.props.handleClick(3)
                                                            this.props.handleArtist('6tbjWDEIzxoDsBA1FuhfPW')}}/>
            <div class="desc">Madonna</div> 
          </div>
          <div class="question">
            <img src={beyonce} alt="Beyonce" onClick={() => {this.props.handleClick(3)
                                                            this.props.handleArtist('6vWDO969PvNqNYHIOW5v0m')}}/>     
            <div class="desc">Beyonce</div> 
          </div>
          <div class="question">
            <img src={rihanna} alt="Rihanna" onClick={() => {this.props.handleClick(3)
                                                            this.props.handleArtist('5pKCCKE2ajJHZ9KAiaK11H')}}/>
            <div class="desc">Rihanna</div>
          </div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'disco') {
      return(
        <div>
        <div class="header">What's your favorite artist</div>
        <div class="align-center">
          <div class="question">
            <img src={donna} alt="Donna Summer" onClick={() => {this.props.handleClick(3)
                                                              this.props.handleArtist('2eogQKWWoohI3BSnoG7E2U')}}/>
            <div class="desc">Donna Summer</div>
          </div>
          <div class="question">
            <img src={chic} alt="CHIC" onClick={() => {this.props.handleClick(3)
                                                      this.props.handleArtist('0Xf8oDAJYd2D0k3NLI19OV')}}/>
            <div class="desc">CHIC</div> 
          </div>
          <div class="question">
            <img src={beegees} alt="Bee Gees" onClick={() => {this.props.handleClick(3)
                                                            this.props.handleArtist('1LZEQNv7sE11VDY3SdxQeN')}}/> 
            <div class="desc">Bee Gees</div> 
          </div>
          <div class="question">
            <img src={boneym} alt="Boney M" onClick={() => {this.props.handleClick(3)
                                                          this.props.handleArtist('54R6Y0I7jGUCveDTtI21nb')}}/>
            <div class="desc">Boney M</div>
          </div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'hip-hop') {
      return(
        <div>
        <div class="header">What's your favorite artist</div>
        <div class="align-center">
          <div class="question">
            <img src={kanye} alt="Kanye" onClick={() => {this.props.handleClick(3)
                                                        this.props.handleArtist('5K4W6rqBFWDnAN6FQUkS6x')}}/>
            <div class="desc">Kanye West</div>
          </div>
          <div class="question">
            <img src={drake} alt="Drake" onClick={() => {this.props.handleClick(3)
                                                        this.props.handleArtist('3TVXtAsR1Inumwj472S9r4')}}/> 
            <div class="desc">Drake</div> 
          </div>
          <div class="question">
            <img src={scott} alt="Scott" onClick={() => {this.props.handleClick(3)
                                                        this.props.handleArtist('0Y5tJX1MQlPlqiwlOH1tJY')}}/> 
            <div class="desc">Travis Scott</div> 
          </div>
          <div class="question">
            <img src={rocky} alt="Rocky" onClick={() => {this.props.handleClick(3)
                                                        this.props.handleArtist('13ubrt8QOOCPljQ2FL1Kca')}}/> 
            <div class="desc">A$ap Rocky</div>
          </div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'techno') {
      return(
        <div>
        <div class="header">What's your favorite artist</div>
        <div class="align-center">
          <div class="question">
            <img src={artbat} alt="ARTBAT" onClick={() => {this.props.handleClick(3)
                                                          this.props.handleArtist('3BkRu2TGd2I1uBxZKddfg1')}}/>
            <div class="desc">ARTBAT</div>
          </div>
          <div class="question">
            <img src={schwefelgelb} alt="Schwefelgelb" onClick={() => {this.props.handleClick(3)
                                                                      this.props.handleArtist( '0gvrCzDfdcHWrTOanKBlJL')}}/>
            <div class="desc">Schwefelgelb</div> 
          </div>
          <div class="question">
            <img src={amelie} alt="Amelie Lens" onClick={() => {this.props.handleClick(3)
                                                                this.props.handleArtist('5Ho1vKl1Uz8bJlk4vbmvmf')}}/>       
            <div class="desc">Amelie Lens</div> 
          </div>
          <div class="question">
            <img src={solomun} alt="Solomun" onClick={() => {this.props.handleClick(3)
                                                            this.props.handleArtist('5wJK4kQAkVGjqM9x46KQOC')}}/>
            <div class="desc">Solomun</div>
          </div>
        </div>
      </div>
      )
    }
    else if (this.props.genre === 'edm') {
      return(
        <div>
        <div class="header">What's your favorite artist</div>
        <div class="align-center">
          <div class="question">
            <img src={deadmau5} alt="Deadmau5" onClick={() => {this.props.handleClick(3)
                                                              this.props.handleArtist('2CIMQHirSU0MQqyYHq0eOx')}}/>
            <div class="desc">Deadmau5</div>
          </div>
          <div class="question">
            <img src={avicii} alt="Avicii" onClick={() => {this.props.handleClick(3)
                                                          this.props.handleArtist('1vCWHaC5f2uS3yhpwWbIA6')}}/>
            <div class="desc">Avicii</div> 
          </div>
          <div class="question">
            <img src={marshmello} alt="Marshmello" onClick={() => {this.props.handleClick(3)
                                                                  this.props.handleArtist('64KEffDW9EtZ1y2vBYgq8T')}}/>      
            <div class="desc">Marshmello</div> 
          </div>
          <div class="question">
            <img src={martin} alt="Martin Garrix" onClick={() => {this.props.handleClick(3)
                                                                  this.props.handleArtist('60d24wfXkVzDSfLS6hyCjZ')}}/>
            <div class="desc">Martin Garrix</div>
          </div>
        </div>
      </div>
      )
    }
  }
}


export default Artist;