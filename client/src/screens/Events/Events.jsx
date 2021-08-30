import React from 'react'

export default function Events(props) {
  const {events} = props
  return (
    <div>
      {events.map(event => (
        <p key={event.id}>{event.title}</p>
      )) }
    </div>
  )
}
