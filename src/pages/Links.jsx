import React from 'react'

function Links() {

const linkedIn = 'https://www.linkedin.com/in/kenneth-rakentine-a48ab9277/'

const gitLink = 'https://github.com/Kenneth-Rakentine?tab=repositories'

const igLink = 'https://www.instagram.com/future__________/'

  return (
    <div className='linksContainer'>
      {/* <h1>Links</h1> */}
      <a href={linkedIn} target="_blank">
      <img
          src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG19.png" 
          className='linkedinIcon' alt="LinkedIn Logo"
        />
      </a>

      <a href={gitLink} target="_blank">
      <img
          src="https://logoeps.com/wp-content/uploads/2014/04/24233-github-logo-in-a-rounded-square-icon-vector-icon-vector-eps.png" 
          className='gitIcon' alt="Github Logo"
        />
      </a>

      <a href={igLink} target="_blank">
      <img
          src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" 
          className='igIcon' alt="Instagram Logo"
        />
      </a>
    </div>
  )
}

export default Links