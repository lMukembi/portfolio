import React from 'react'
import "../css/socialmedia.css"
import {AiFillGithub, AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube} from "react-icons/ai"
import {ImLinkedin2} from "react-icons/im"
import {GrFacebookOption} from "react-icons/gr"

const socialmedia = () => {
  return (
    <div className='socialmedia' id='socialmedia'>
      <h1>Connect with me:</h1>
      <p>I love sharing more about technology. You can find me on the following social media platforms.</p>
      <div className='socialmedia_icons'>
        <p><a href='https://twitter.com/lMukembi'><AiOutlineTwitter/></a></p>
        <p><a href='https://www.youtube.com/@mukembi'><AiFillYoutube/></a></p>
        <p><a href='https://www.linkedin.com/in/mukembi-leviticus/'><ImLinkedin2/></a></p>
        <p><a href='https://github.com/lMukembi'><AiFillGithub/></a></p>
        <p><a href='https://www.facebook.com/mukembi.leviticus.961/'><GrFacebookOption/></a></p>
        <p><a href='https://www.instagram.com/mukembi.leviticus/'><AiOutlineInstagram/></a></p>
      </div>
    </div>
  )
}

export default socialmedia