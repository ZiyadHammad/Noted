import React from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  return (
    <div className="profile-main">
      <div className="left-pro">
        <Link to="/todos">
         <button className="b1">My Todos</button>
        </Link>
        <Link to="/events">
        <button className="b2">My Events</button>
        </Link>
      </div>
      <div className="right-pro">
        <Link to="/todos/new">
        <div className="card">
          <p>+ Create New Todo</p>
        </div>
        </Link>
        <Link to="/events/new">
        <div className="card">
          <p>+ Create New Event</p>
          </div>
          </Link>
      </div>
      
    </div>
  )
}
