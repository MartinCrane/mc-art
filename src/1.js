1
<div className="dung" style={{"left":`${this.props.audioProfile[20]*4}px`, "top":`${300 + this.state.number*2}px`}}>
  <h1 className="App-title">MAXIMAL</h1>
</div>
<div>
  {this.props.audioProfile[1]} / {this.props.audioProfile[20]} / {this.props.audioProfile[30]}
</div>

<h1> MAXIMA MAXIMALMA XIMALMAX IMALMAXIMAL M AXIMALMAX MALMAXIMALMAXIM LMAXIMALMAX IMALM XIMALM AXIMALM AXIMALM AXIMALMA IMAL AXIMMAXIMAL MAXIMAL MAXIMAL MAXIMAL MAXIMALMAX MAXIMAL IMAL MAXIMAL AL</h1>

<div className="square" style={{

  "transform": `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.01 + (this.state.ticker *.1)},0,0,1,0,0,0,0,1)`,
  "WebkitTransform" : `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.01 + (this.state.ticker *.1)},0,0,1,0,0,0,0,1)`,
  "backgroundColor": `rgba(100,200,000,${this.props.audioProfile[1]*.0001 * 5 })`
}}>
  <h1>{wordsArray.slice((this.state.slowRandom*5 + this.state.slowRandom*5), (this.state.slowRandom*5 + this.state.slowRandom*5 + 300)).map((word) => <span>{word} </span>)}</h1>
</div>

<div className="square" style={{
  "transform": `matrix3d(1,0,0.00,0,0.00,1,${.001 + (this.state.ticker *.1)},${.0001 + (this.state.ticker *.1)},0,0,1,0,0,0,0,1)`,
  "WebkitTransform" : `matrix3d(1,0,0.00,0,0.00,1,${.001 + (this.state.ticker *.1)},${.0001 + (this.state.ticker *.1)},0,0,1,0,0,0,0,1)`,
  "backgroundImage":`url('/image/o${Math.round(this.state.slowRandom * .1)}.png')`,
  "opacity":`${(this.props.audioProfile[2]-94)/91 - .35}`,
  "left":`1px`
}}>
</div>

<div className="square" style={{
  "transform": `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.0001 + (this.state.ticker *-.3)},0,0,1,0,0,0,0,1)`,
  "WebkitTransform" : `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.0001 + (this.state.ticker *.3)},0,0,1,0,0,0,0,1)`,
  "left":`500px`,
  "backgroundImage":`url('/image/o${Math.round(this.state.slowRandom * .1)}.png')`,
  "opacity":`${(this.props.audioProfile[20]-94)/91 - .35}`
}}>
</div>
<div className="square" style={{
  "transform": `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.0001 + (this.state.ticker *-.3)},0,0,1,0,0,0,0,1)`,
  "WebkitTransform" : `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.0001 + (this.state.ticker *.3)},0,0,1,0,0,0,0,1)`,
  "backgroundImage":`url('/image/t2.jpg')`,
  "opacity":`${(this.props.audioProfile[40]-94)/91 - .35}`,
  "left":`1000px`
}}>
</div>
<div className="square" style={{
  "transform": `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.0001 + (this.state.ticker *-.3)},0,0,1,0,0,0,0,1)`,
  "WebkitTransform" : `matrix3d(1,0,0.00,0,0.00,1,${-.01 + (this.state.ticker *.1)},${-.0001 + (this.state.ticker *.3)},0,0,1,0,0,0,0,1)`,
  "backgroundImage":`url('/image/t1.jpg')`,
  "opacity":`${(this.props.audioProfile[60]-94)/91 - .35}`,
  "left":`1500px`
}}>
</div>
