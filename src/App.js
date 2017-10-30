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
      frequencyData: null
    }
    this.elementFloat = this.elementFloat.bind(this)
  }

  elementFloat() {
    return {
      left: `${this.state.number}px`,
      top: `${this.state.number *2}px`,
      display: 'relative'
    }
  }

  componentDidMount() {
    var interval = .00001
    var direction = 0

    setInterval(() => {
    if (this.state.ticker > .001 && direction == 0) {
      interval = interval *-1
      direction = 1
    } else if (this.state.ticker < .0001 && direction == 1) {
      interval = interval * -1
      direction = 0
    } else {
    }
    this.setState({
      random: Math.floor( (Math.random()*100)+1),
      ticker: this.state.ticker + (Math.random() * interval)
    })
  }, 30)

  setInterval(() => {
    let top = this.state.top
    if (this.props.audioProfile[20] > top ) {
      top = this.props.audioProfile[20]
    }
    let low = this.state.low
    if (this.props.audioProfile[20] < low ) {
      low = this.props.audioProfile[20]
    }
  this.setState({
    slowRandom: Math.floor( (Math.random()*100)+1),
    slowTicker: this.state.slowTicker + 1,
    slowProfile: this.props.audioProfile,
    top: top,
    low: low
  })
}, 3000)

  }




  render() {
    return (
      <div className="drift">
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
            "left":`5px`,
            "position":"absolute",
            "width":"100%",
            "zIndex":"-2",
            "filter": `invert(${(this.props.audioProfile[40] - 128)*10}%)`
          }}></img>
        <div className="meterBlur">
          {wordsString.slice(this.state.slowTicker, this.state.slowTicker+64).split("").map((letter, index) => <div key={index} className="meterBlur" style={{"left":`${this.props.audioProfile[index] * 10 -720}px`, "top":`${index*20}px`, "position":"absolute" }}> <h1>{letter}</h1></div>)}
        </div>

        <div>

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
