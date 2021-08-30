import React from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  return (
    <div className="profile-main">
      <div className="left">
        <Link to="/todos">
          My Todos
        </Link>
        <Link to="/events">
          My Events
        </Link>
      </div>
      <div className="right">
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
