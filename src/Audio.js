import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateFreq } from './actions/updateFreq'

class ReactAudioPlayer extends React.Component {

  constructor() {
    super()
    this.state = {
      play: false,
      frequencyData: null
    }
  }

  componentDidMount() {
    const audio = this.audio;

    audio.addEventListener('error', (e) => {
      this.props.onError(e);
    });

    // When enough of the file has downloaded to start playing
    audio.addEventListener('canplay', (e) => {
      this.props.onCanPlay(e);
    });

    // When enough of the file has downloaded to play the entire file
    audio.addEventListener('canplaythrough', (e) => {
      this.props.onCanPlayThrough(e);
    });

    // When audio play starts
    audio.addEventListener('play', (e, int) => {
      this.interval = setInterval(analyize, 32);
      this.setListenTrack();
      this.props.onPlay(e);
    });

    var analyize = () => {
      analyser.getByteTimeDomainData(dataArray)
      this.props.updateFreq(dataArray)
    }

    // When unloading the audio player (switching to another src)
    audio.addEventListener('abort', (e) => {
      this.clearListenTrack();
      this.props.onAbort(e);
    });

    // When the file has finished playing to the end
    audio.addEventListener('ended', (e) => {
      clearInterval(this.interval)
      this.clearListenTrack();
      this.props.onEnded(e);
    });

    // When the user pauses playback
    audio.addEventListener('pause', (e) => {
      clearInterval(this.interval)
      this.clearListenTrack();
      this.props.onPause(e);
    });

    // When the user drags the time indicator to a new time
    audio.addEventListener('seeked', (e) => {
      this.props.onSeeked(e);
    });

    audio.addEventListener('loadedmetadata', (e) => {
      this.props.onLoadedMetadata(e);
    });
    /**
     * Set the analyizer and buffer length
     */
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audio.crossOrigin = "anonymous"
    var audioSrc = audioCtx.createMediaElementSource(audio)
    var analyser = audioCtx.createAnalyser()
    audioSrc.connect(analyser)
    audioSrc.connect(audioCtx.destination)

    analyser.fftSize = 64;
    var bufferLength = analyser.fftSize;
    var dataArray = new Uint8Array(bufferLength);
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    if (this.props.currentTrack === this.audio.title) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  fadeOut() {
    var fade = setInterval(() => {
        if (this.audio.volume < .011) {
            this.audio.pause()
            clearInterval(fade);
          } else {
            this.audio.volume -= .01;
          }
    }, 10);
  }

  fadeIn() {
    this.audio.volume = 0
    this.audio.play()
    var fade = setInterval(() => {
        if (this.audio.volume > .989) {
            this.audio.volume = 1
            clearInterval(fade);

        } else {
          this.audio.volume += .01;
        }
    }, 10);
  }

  componentWillReceiveProps(nextProps) {
    console.log("title: " + this.audio.title + "    current: " + nextProps.currentTrack)
    if (this.audio.title === nextProps.currentTrack) {
      this.fadeIn()
    } else {
      this.fadeOut();
    }
  };

  /**
   * Set an interval to call props.onListen every props.listenInterval time period
   */
  setListenTrack() {
    if (!this.listenTracker) {
      const listenInterval = this.props.listenInterval;
      this.listenTracker = setInterval(() => {
        this.props.onListen(this.audio.currentTime);
      }, listenInterval);
    }
  }

  /**
   * Clear the onListen interval
   */
  clearListenTrack() {
    if (this.listenTracker) {
      clearInterval(this.listenTracker);
      this.listenTracker = null;
    }
  }

  render() {
    const incompatibilityMessage = this.props.children || (
      <p>Your browser does not support the <code>audio</code> element.</p>
    );

    // Set controls to be true by default unless explicity stated otherwise
    const controls = !(this.props.controls === false);

    // Set lockscreen / process audio title on devices
    const title = this.props.title ? this.props.title : this.props.src;

    return (
      <audio
        autoPlay={this.props.autoPlay}
        className={`react-audio-player ${this.props.className}`}
        id={15}
        controls={controls}
        loop={this.props.loop}
        muted={this.props.muted}
        onPlay={this.onPlay}
        preload={this.props.preload}
        ref={(ref) => { this.audio = ref; }}
        src={this.props.src}
        style={this.props.style}
        title={title}
      >
        {incompatibilityMessage}
      </audio>
    );
  }
}

ReactAudioPlayer.defaultProps = {
  autoPlay: false,
  children: null,
  className: '',
  controls: false,
  listenInterval: 10000,
  loop: false,
  muted: false,
  onAbort: () => {},
  onCanPlay: () => {},
  onCanPlayThrough: () => {},
  onEnded: () => {},
  onError: () => {},
  onListen: () => {},
  onPause: () => {},
  onPlay: () => {},
  onSeeked: () => {},
  onLoadedMetadata: () => {},
  currentTrack: '0',
  preload: 'metadata',
  src: null,
  style: {},
  title: '',
};

ReactAudioPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
  controls: PropTypes.bool,
  listenInterval: PropTypes.number,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  onAbort: PropTypes.func,
  onCanPlay: PropTypes.func,
  onCanPlayThrough: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  onListen: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  currentTrack: PropTypes.string,
  onSeeked: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  preload: PropTypes.oneOf(['', 'none', 'metadata', 'auto']),
  src: PropTypes.string, // Not required b/c can use <source>
  style: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateFreq: updateFreq
  }, dispatch)
}

export const ConnectedReactAudioPlayer = connect(null, mapDispatchToProps)(ReactAudioPlayer)
