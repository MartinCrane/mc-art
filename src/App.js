import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedReactAudioPlayer } from './Audio';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      number: 0,
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
    setInterval(() => {
    this.setState({
      number: Math.floor( (Math.random()*100)+1 )
    })
  }, 30)
  }




  render() {
    return (
      <div className="drift">
        <header className="App-header">



        </header>
        <div className="go"
             >
             <h1 className="App-title">SOUNDasdfsfTRACKS</h1>
               <ConnectedReactAudioPlayer
                 src="https://s3.amazonaws.com/www.martincrane.net/audio/library/maximal-3.m4a"
                 ref="player"
                 controls
                 >
              </ConnectedReactAudioPlayer>
        </div>
        <div>
          {this.props.audioProfile[1]} / {this.props.audioProfile[20]} / {this.props.audioProfile[30]}
        </div>

        <div className="dung" style={{"left":`${this.props.audioProfile[1]*4}px`, "top":`${300 + this.state.number*2}px`}}>
          <h1 className="App-title">MAXIMAL</h1>
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
