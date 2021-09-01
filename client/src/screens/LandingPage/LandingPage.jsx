import "./LandingPage.scss"

import { init } from 'ityped'
import {useEffect, useRef} from "react"

export default function LandingPage() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [' Todos!', 'Events', 'Saving Time!']
    })
  },[])

  return (
    <div className="home" id="home">

      <div className="left">
         <div className="img-container">
          <img src="./assets/mylogo.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Welcome to</h2>
          <h1>NOTED</h1>
          
          <h3>Start <span ref={textRef}>Todos!</span></h3>
        </div>
        <a href="#about">
        
        </a>
      </div>
    </div>
  )
}
