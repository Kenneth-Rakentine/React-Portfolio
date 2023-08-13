import React from 'react'

function Footer() {

  const footerClicker = ()=>{
    window.scrollTo(0, 0)
  } 

  return (
    <div className='footContainer'>
        <p className='footerTxt'>
        © 2023 Kenny Rakentine. All rights reserved.
        </p> <img className='footLogo' src='https://i.ibb.co/qjyHnNc/k7-cut.png' onClick={footerClicker} tabIndex={0}></img>
    </div>
  )
}

export default Footer