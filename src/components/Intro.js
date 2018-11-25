import React from 'react';
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import Iframe from 'react-iframe';
import './anim.css';


var w = window.innerWidth;
var h = window.innerHeight;
/*window.addEventListener("resize", function() {
var w = window.innerWidth;
var h = window.innerHeight;
} );*/
console.log(w, h)
const Sidebar = posed.div({
  exit: {
    x: '-100%'
  },
  enter: {
    x: '0%',
    beforeChildren: true,
    staggerChildren: 60
  }
});

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 }
};

var vid = (<iframe src={"//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_white&id=1435336096&c=us&l=en-US&w=300&h=250&store=apps"} frameBorder={0} className={'store'}></iframe>)
 
function Intro() {
  return (
    <div className="container">
      <Sidebar className="sidebar" initialPose="exit" pose="enter">
        <h1>
          <div>Steve Raaen</div>
        </h1>
        <div className="list">
				<div><SplitText charPoses={charPoses}>- Business Manager</SplitText></div>
				<div><SplitText charPoses={charPoses}>- Software Engineer</SplitText></div>         
				<div><SplitText charPoses={charPoses}>- Communicator</SplitText></div>        				       
				<div><SplitText charPoses={charPoses}>- Collaborator</SplitText></div>        
				<div><SplitText charPoses={charPoses}>- Empathizer</SplitText></div>              
        </div>
      </Sidebar>
      <div className='main'>
      	<div className='head'>Projects</div>
	      <div className='project'>
	      	<iframe src="//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_white&id=1435336096&c=us&l=en-US&w=180&h=150&store=apps" frameBorder={0} style={{overflowX:'hidden',overflowY: 'hidden',width:'180px',height:'150px',border:'1px', borderColor: 'coral', borderRadius: 12}}></iframe>
	      	<div className='blurb'>An iOS application built with React Native and MongoDB, using an Express server built on Nodejs.  </div>
	      	<div className='blurb'></div>
	      	<div className='blurb'>An iOS application built with React Native and MongoDB, using an Express server built on Nodejs.  </div>
	      </div>
	      <div className='project'>
	      	<iframe src="//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_white&id=1342765203&c=us&l=en-US&w=180&h=150&store=apps" frameBorder={0} style={{overflowX:'hidden',overflowY: 'hidden',width:'180px',height:'150px',border:'1px', borderColor: 'coral', borderRadius: 12}}></iframe>
	      	<div className='blurb'>An iOS application built with React Native and MongoDB, using an Express server built on Nodejs.  </div>
	      	<div className='blurb'></div>
	      	<div className='blurb'>An iOS application built with React Native and MongoDB, using an Express server built on Nodejs.  </div>
	      </div>
	      <div className='project'>
	      	<iframe src="//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_white&id=1398506801&c=us&l=en-US&w=180&h=150&store=apps" frameBorder={0} style={{overflowX:'hidden',overflowY: 'hidden',width:'180px',height:'150px',border:'1px', borderColor: 'coral', borderRadius: 12}}></iframe>
	      	<div className='blurb'>An iOS application built with React Native and MongoDB, using an Express server built on Nodejs.  </div>
	      	<div className='blurb'></div>
	      	<div className='blurb'>An iOS application built with React Native and MongoDB, using an Express server built on Nodejs.  </div>
	      </div>
      </div>
    </div>
  );
}
export default Intro

























