import React from 'react'
import { Link } from 'react-router-dom';
import './Events.css'

export default function Events(props) {
  const {events} = props
  return (
    <div className="event-wrapper">
      <div className="event-content">
      {events.map(event => (
        <Link to={`/events/${event.id}`}>
          <p key={event.id}>{event.title}</p>
          </Link>
      ))}
        </div>
    </div>
  )
}
