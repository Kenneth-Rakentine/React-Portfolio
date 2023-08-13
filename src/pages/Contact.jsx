import React from 'react'
import ContactUs from '../components/ContactUs'

function Contact() {
  return (
    <div className='contactContainer'>

    <h1 className='contactHeadTxt'>Contact</h1>
    <div className="contactContainer">
    <ContactUs />
    </div>
      <div className='contactFlex'>
      
      <div className='contactFloat'>
    <a href='mailto:rakentine.k@gmail.com' className='emailTxt'> Email </a>
    </div>
    <div className='contactFloat2'> 
    <a href='https://www.linkedin.com/in/kenneth-rakentine' className='linkedInContactTxt'>Jobs</a>
    </div>
    <div className='contactFloat3'>
    <a href='https://github.com/Kenneth-Rakentine' className='githubTxt'>Work</a>
    </div>
    
    </div>
    <img className='webDevTag' src='https://i.ibb.co/xmwWYpp/web-dev-tag.png'></img>
    <br></br>
   
  </div>
  )
}

export default Contact