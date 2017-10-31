import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedReactAudioPlayer } from './Audio';
import logo from './logo.svg';
import { wordsArray, wordsString } from './actions/data.js';
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
      bgFade:0
    }
    this.elementFloat = this.elementFloat.bind(this)
    this.invert = this.invert.bind(this)
  }

  elementFloat() {
    return {
      left: `${this.state.number}px`,
      top: `${this.state.number *2}px`,
      display: 'relative'
    }
  }

  invert(number, invert) {
    let inverse = (number - 128)*10
    if (inverse > 100) {
      inverse = 100
    } else if (inverse < 0) {
      inverse = 0
    } else {
      inverse
    }
    if (invert == 1) {
      return inverse
    } else {
      return 100 - inverse
    }
  }

  componentDidMount() {
    var interval = .00001
    setInterval(() => {
      this.setState({
        random: Math.floor( (Math.random()*100)+1),
        ticker: this.state.ticker + (Math.random() * interval)
      })
    }, 30)

    setInterval(() => {
      this.setState({
        slowTicker: this.state.slowTicker + 1,
        bgFade: this.props.audioProfile[40]
        })
    }, 300)
  }




  render() {
    return (
      <div className="drift" >
        <header className="App-header">
        </header>
        <div className="go">
           <ConnectedReactAudioPlayer
             src="https://s3.amazonaws.com/www.martincrane.net/audio/maximal-1.m4a"
             ref="player"
             controls
             >
          </ConnectedReactAudioPlayer>
        </div>
          <img className="slowImage"
            src="/image/t4.jpg" style={{
            "display":"none",
            "filter": `invert(${this.invert(this.props.audioProfile[40], 1)}%)`
          }}></img>
        <div className="meterContainer" style={{
            "filter": `invert(${this.invert(this.props.audioProfile[40], 1)}%)`
          }}>
          {wordsString.slice(this.state.slowTicker, this.state.slowTicker+40).split("").map((letter, index) => <div key={index} className="meterBlur" style={{"left":`${this.props.audioProfile[index] * 10 - 1280}px`, "top":`${index*30}px`, "position":"absolute" }}> <h1>{letter}</h1></div>)}
        </div>

        <div style={{
            "filter": `invert(${this.invert(this.state.bgFade, 0)}%)`
          }}>
        </div>
        <div className='back' style={{
            "filter": `invert(${this.invert(this.state.bgFade, 0)}%)`
          }}>
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
export const ConnectedApp = connect(mapStateToProps)(App)
