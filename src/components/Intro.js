import React, { Component }from 'react';
import posed, { PoseGroup} from 'react-pose';
import SplitText from 'react-pose-text';
import Iframe from 'react-iframe';
import './anim.css';
import ghl from "../GitHub-Mark-32px.png"

var w = window.innerWidth;
var h = window.innerHeight;
/*window.addEventListener("resize", function() {
var w = window.innerWidth;
var h = window.innerHeight;
} );*/
console.log(w, h)

var skillSet = ['Product Management', 'Stakeholder Collaboration'  , 'Internal Communications' , 'Business Analytics' , 'Javascript(ES6+)' , 'CLI' , 'Regex' , 'SQL' , 'MongoDB' , 'NodeJS' , 'Express' , 'GeoJSON' , 'ReactJS' , 'React Native ', 'Xcode' , 'Heroku' , 'AWS' , 'Git']
export default class  Intro extends Component {
  constructor(props) {
    super(props)
    this.state={
      poseStatus: 'enter'
    }
    this.showHide = this.showHide.bind(this)
  }
  componentDidMount() {

  }
      showHide() {
      this.state.poseStatus === 'enter' ? this.setState({poseStatus: 'exit'}) : this.setState({poseStatus: 'enter'})

    }
  render() {
    const skills = ["Business Manager", "Software Engineer", "Communicator", "Collaborator", "Empathizer"]
    const Sidebar = posed.div({

      style:{},
      exit: {
        x: '-100%'
      },
      enter: {
        x: '0%',
        beforeChildren: true,
        staggerChildren: 60
      }
    });

    const Item = posed.div({
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    })

const ItemList = () => (
  <PoseGroup>
    {skills.map((item, idx) => <Item style={{marginBottom: '4vh'}} key={idx}>{item}</Item>)}
  </PoseGroup>
)

  return (
    <div className="container">
    <div className="sidebar">  
      <Sidebar initialPose="exit" pose={this.state.poseStatus}>
    
        <h1>
          <div>Steve Raaen</div>
        </h1>
        <div className="list">
         <ItemList />
          
        </div>
      </Sidebar>
      </div>
      <div className='main'>
        <div style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}> Example Projects
      <div className='projcont'>
      
	      <div className='project'>
	      	<iframe title= "ASPManager"     src="//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_white&id=1435336096&c=us&l=en-US&w=180&h=150&store=apps" frameBorder={0} style={{overflowX:'hidden',overflowY: 'hidden',width:'180px',height:'150px', border: '0px'}}></iframe>
	        <div style={{justifyContent: 'center'}}> <a href="https://github.com/steveraaen/freschproject"><img border="0" alt="GitHub" src={ghl} width="32px" height="32px"/></a></div>


        </div>
	      <div className='project'>
	      	<iframe title= "Nearby-Subways" src="//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_white&id=1342765203&c=us&l=en-US&w=180&h=150&store=apps" frameBorder={0} style={{overflowX:'hidden',overflowY: 'hidden',width:'180px',height:'150px', border: '0px'}}></iframe>
	         <div style={{justifyContent: 'center'}}> <a href="https://github.com/steveraaen/subway-frontend"><img border="0" alt="GitHub" src={ghl} width="32px" height="32px"/></a></div>


        </div>
	      <div className='project'>
	      	<iframe title= "Freschen"       src="//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_white&id=1398506801&c=us&l=en-US&w=180&h=150&store=apps" frameBorder={0} style={{overflowX:'hidden',overflowY: 'hidden',width:'180px',height:'150px', border: '0px'}}></iframe>       
           <div style={{justifyContent: 'center'}}> <a href="https://github.com/steveraaen/freschproject"><img border="0" alt="GitHub" src={ghl} width="32px" height="32px"/></a></div>
         
        </div>
      </div>
      </div>
      </div>
    </div>
  );
  }
}


























