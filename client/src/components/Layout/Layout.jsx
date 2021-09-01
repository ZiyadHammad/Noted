import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props
  
  return (
    <div className="layout">
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />

      <div className="content">{props.children}</div>
     
        <Footer />
     
    </div>
  )
}
