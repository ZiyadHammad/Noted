
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'


export default function Footer() {
  return (
    <div className="wrapper">
      <div className="footer">
      <p>Created By Ziyad Hammad 2021</p>

      <a href="https://github.com/ZiyadHammad" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faGithub} id="git" />
        </a>
      
      

      <a href="https://www.linkedin.com/in/ziyad-hammad/" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} id="link" />
        </a>
        </div>
      
    </div>
  )
}
