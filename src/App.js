import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import { keyframes } from 'popmotion';
import './components/styles.css'
import Connections from './components/Connections.js'
import Example from './components/Example.js'

const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 600
  },
  closed: { x: '-100%', delay: 300 }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

export default class AppB extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <div>
      <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        <Item className="item">Bio</Item>
        <Item className="item">Resume</Item>
        <Item className="item">Projects</Item>
        <Item className="item">Hiking Blog</Item>
      </Sidebar>
      <div>
        <Connections />
      </div>
        <Example />
      </div>
    );
  }
}
