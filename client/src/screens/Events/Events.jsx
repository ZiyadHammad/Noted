import React from 'react'
import { Link } from 'react-router-dom';

export default function Events(props) {
  const {events} = props
  return (
    <div>
      {events.map(event => (
        <Link to={`/events/${event.id}`}>
          <p key={event.id}>{event.title}</p>
          </Link>
      )) }
    </div>
  )
}
