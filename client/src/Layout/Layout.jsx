import React from 'react'
import {Link} from "react-router-dom"

export default function Layout(props) {
  return (
    <div>
      <h1>Noted</h1>
      <Link tp="/sign-up">
        <a></a>
      </Link>
      <Link tp="/sign-up">
        <a></a>
      </Link>
      <hr />
      {props.children}
    </div>
  )
}
