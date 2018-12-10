import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import { tween } from 'popmotion';
import ReactSVG from 'react-svg'
import { interpolate } from 'flubber';
import './styles.css';
import svgLogos from '../logos/svgPaths.js';
var logos =  [<img src={require('../logos/sjrlogo.png')} height="90px" width="90px"/>, <img src={require('../logos/nodelogo.png')} height="90px" width="90px"/>]

export default class Example extends React.Component {
constructor(props) {
  super(props) 
  this.state = {
    curLogo: logos[0]
  }
}
componentDidMount() {


}

  render() {

  setTimeout(() => {
    this.setState({curLogo: logos[1]})
   

  }, 1000)





    return (
      <div className="flash">
        <div>
        {this.state.curLogo}
        </div>

      </div>
    );
  }
}
