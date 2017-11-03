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
      bgFade:0,
      current: '1'
    }
    this.elementFloat = this.elementFloat.bind(this)
    this.invert = this.invert.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.fadeOut = this.fadeOut.bind(this)
    this.fadeIn = this.fadeIn.bind(this)
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

  handleClick(e){
    this.setState({
      current: e.target.dataset.id
    })

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

  fadeOut(){
    setTimeout(() => {return "pageOff"}, 1000)
    return "slowOff"
  }

  fadeIn(){
    return "pageOn"
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
    let shift = <h1 className="App-title">{this.rotateLetter(consonants, this.props.audioProfile[1])}{this.rotateLetter(vowels, this.props.audioProfile[5])}{this.rotateLetter(consonants, this.props.audioProfile[10])}{this.rotateLetter(vowels, this.props.audioProfile[15])}{this.rotateLetter(consonants, this.props.audioProfile[20])}{this.rotateLetter(vowels, this.props.audioProfile[25])}{this.rotateLetter(consonants, this.props.audioProfile[30])}</h1>

    return (
      <div className="drift" >

        <header className="App-header" onClick={e => this.handleClick(e)}>
          <h1 data-id="1" >1</h1>
          <h1 data-id="2" >2</h1>
          <h1 data-id="3" >3</h1>
          <h1 data-id="4" >4</h1>
        </header>

        <div className={this.state.current === '1' ? this.fadeIn() : this.fadeOut()}
          >
          <ConnectedReactAudioPlayer
            src="https://s3.amazonaws.com/www.martincrane.net/audio/maximal-1.m4a"
            currentTrack={this.state.current}
            title='1'
            controls
            >
         </ConnectedReactAudioPlayer>
          <div className="m1meterContainer" style={{
              "filter": `invert(${this.invert(this.props.audioProfile[40], 1)}%)`
            }}>
            {wordsString.slice(this.state.slowTicker, this.state.slowTicker+40).split("").map((letter, index) => <div key={index} className="m1MeterBlur" style={{"left":`${this.props.audioProfile[index] * 10 - 1280}px`, "top":`${index*30}px`, "position":"absolute" }}> <h1>{letter}</h1></div>)}
          </div>
          <div style={{
              "filter": `invert(${this.invert(this.state.bgFade, 0)}%)`
            }}>
          </div>
          <div className='m1back' style={{
              "filter": `invert(${this.invert(this.state.bgFade, 0)}%)`
            }}>
          </div>
        </div>


        <div className={this.state.current === '2' ? this.fadeIn() : this.fadeOut()}
          >
          <ConnectedReactAudioPlayer
            src="https://s3.amazonaws.com/www.martincrane.net/audio/maximal-2.m4a"
            currentTrack={this.state.current}
            title='2'
            controls
            >
         </ConnectedReactAudioPlayer>
          <div className="m2wrapper">
          <div className="m2slow2" style={{
              "filter" : `blur(${((this.props.audioProfile[4]-128)*10)+5}px)`,
              "left" : "50%",
              "marginLeft" : "-850px",
            }}>
          </div>
          <div className="m2slow2" style={{
              "filter" : `blur(${((this.props.audioProfile[25]-128)*10)+5}px)`,
              "left" : "50%",
              "marginLeft" : "-350px",
            }}>
          </div>
          <div className="m2slow2" style={{
              "filter" : `blur(${((this.props.audioProfile[40]-128)*10)+5}px)`,
              "left" : "50%",
              "marginLeft" : "150px",
            }}>
          </div>
          <div className='m2slowColorBack'>
          </div>
          </div>
        </div>

        <div className={this.state.current === '3' ? this.fadeIn() : this.fadeOut()}
          >
          <ConnectedReactAudioPlayer
            src="https://s3.amazonaws.com/www.martincrane.net/audio/maximal-3.m4a"
            currentTrack={this.state.current}
            title='3'
            controls
            >
         </ConnectedReactAudioPlayer>

         <div className="m3wrapper">
           <div className="m3words" style={{"left":`${this.props.audioProfile[20]*4}px`,
                                            "top":`${300 + this.state.random*2}px`,
                                            "filter":`blur(${((this.props.audioProfile[40]-128)*10)+5}px)`,
                                            "background-color":`rgba(100, 200, 300, 1)`}}
                                    key="m31">
             <h1>{shift}</h1>
           </div>
         </div>
        </div>

        <div className={this.state.current === '4' ? this.fadeIn() : this.fadeOut()}
          >
          <ConnectedReactAudioPlayer
            src="https://s3.amazonaws.com/www.martincrane.net/audio/maximal-4.m4a"
            currentTrack={this.state.current}
            controls
            title='4'
            >
         </ConnectedReactAudioPlayer>
         <div className="m4wrapper">
           <div className="m4words" style={{"left":`${this.props.audioProfile[20]*4}px`, "top":`${300 + this.state.random*2}px`}}>
             <h1> {shift}</h1>
           </div>
         </div>
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
