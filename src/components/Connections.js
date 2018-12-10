import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import { keyframes } from 'popmotion';


const Box = posed.div({
  left: { x: -100 },
  right: { x: 100 }
})
var skls = ['Product Management', 'Stakeholder Collaboration'  , 'Internal Communications' , 'Business Analytics' , 'Javascript(ES6+)' , 'CLI' , 'Regex' , 'SQL' , 'MongoDB' , 'NodeJS' , 'Express' , 'GeoJSON' , 'ReactJS' , 'React Native ', 'Xcode' , 'Heroku' , 'AWS' , 'Git']

export default class Connections extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return <Box className="flash">xxxx</Box>;
  }
}

