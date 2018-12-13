import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import { tween } from 'popmotion';
import ReactSVG from 'react-svg'
import { interpolate } from 'flubber';
import './styles.css';
import svgLogos from '../logos/svgPaths.js';


export default class Example extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            srLogo: true,
            isVisible: true
        }
    }

    componentDidMount() {

          setInterval(() => {
            this.setState({ 
              srLogo: !this.state.srLogo,
              isVisible: !this.state.isVisible
               })
        }, 1000)
    }



    render() {
       const { isVisible } = this.state.isVisible;
      const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

var srLogo 
 this.state.srLogo ? srLogo = <img src={require('../logos/sjrlogo.png')} height="90px" width="90px"/> : srLogo= <img src={require('../logos/nodelogo.png')} height="90px" width="90px"/>
console.log(srLogo)

    return (
      <div className="flash">
        <Box className="box" pose={isVisible ? 'visible' : 'hidden'}>
        {this.state.srLogo}
        </Box>

      </div>
    );
    }
}