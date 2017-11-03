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
  }

  componentDidMount() {
    var interval = .01
    setInterval(() => {
    this.setState({
      random: Math.floor( (Math.random()*100)+1),
      })
    }, 32)
  }

  render() {
    return (
      <div className="drift">
        <header className="App-header">
        </header>
        <div className="go">
             <ConnectedReactAudioPlayer
               src="https://s3.amazonaws.com/www.martincrane.net/audio/maximal-2.m4a"
               ref="player"
               controls
               >
            </ConnectedReactAudioPlayer>
        </div>
        <div style={{
            "width" : `100%`,
            "height" : `100%`,
            "backgroundColor" : `black`,
            "position" : `absolute`,
            "zIndex" : `-3`,
          }}></div>
        <div className="slow2" style={{
            "filter" : `blur(${((this.props.audioProfile[4]-128)*10)+5}px)`,
            "left" : "50%",
            "marginLeft" : "-850px",
          }}>
        </div>
        <div className="slow2" style={{
            "filter" : `blur(${((this.props.audioProfile[25]-128)*10)+5}px)`,
            "left" : "50%",
            "marginLeft" : "-350px",
          }}>
        </div>
        <div className="slow2" style={{
            "filter" : `blur(${((this.props.audioProfile[40]-128)*10)+5}px)`,
            "left" : "50%",
            "marginLeft" : "150px",
          }}>
        </div>
        <div className='slowColorBack'>
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
export const ConnectedApp2 = connect(mapStateToProps)(App)
