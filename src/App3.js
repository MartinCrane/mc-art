import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedReactAudioPlayer } from './Audio';
import logo from './logo.svg';
import { wordsArray, wordsArray2, wordsString, vowels, consonants } from './actions/data.js';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      random: 0,
      ticker: 0,
      slowRandom:0,
      slowTicker:0,
      top: 0,
      low: 128,
      slowProfile: new Uint8Array(64),
      frequencyData: null,
      current: 1
    }
    this.rotateLetter = this.rotateLetter.bind(this)
  }

  componentDidMount() {
    var interval = .01
    setInterval(() => {
    this.setState({
      random: Math.floor( (Math.random()*100)+1),
      })
    }, 32)
  }
  rotateLetter(array, rotation){
    let length = array.length
    rotation = Math.abs(rotation-128)
    let add
    if (rotation < length) {
        add = rotation
    } else {
      add = rotation % length
    }
    return array[add]
  }

  render() {
    let shift = <h1 className="App-title">{this.rotateLetter(consonants, this.props.audioProfile[1])}{this.rotateLetter(vowels, this.props.audioProfile[5])}{this.rotateLetter(consonants, this.props.audioProfile[10])}{this.rotateLetter(vowels, this.props.audioProfile[15])}{this.rotateLetter(consonants, this.props.audioProfile[20])}{this.rotateLetter(vowels, this.props.audioProfile[25])}{this.rotateLetter(consonants, this.props.audioProfile[30])}</h1>
    return (
      <div className="drift">
        <div className="go">
             <ConnectedReactAudioPlayer
               src="https://s3.amazonaws.com/www.martincrane.net/audio/maximal-3.m4a"
               ref="player"
               controls
               >
            </ConnectedReactAudioPlayer>
        </div>

        <div className="dung" style={{"left":`${this.props.audioProfile[20]*4}px`, "top":`${300 + this.state.random*2}px`}}>
          <h1 style={{"font-size":"9em"}}>{wordsArray2[this.state.random]}{this.state.random}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    audioProfile: state.audioProfile,
  }
}
export const ConnectedApp3 = connect(mapStateToProps)(App)
