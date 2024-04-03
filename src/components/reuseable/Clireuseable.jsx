import React from 'react'
import "./clireuseable.css"

const Clireuseable = ({icon_two, icon_text,cli_count}) => {
  return (
    <>
    <div className="client_one">
        <i>{icon_two}</i>
        <h3>{icon_text}</h3>
        <h4>{cli_count}</h4>
    </div>
    </>
  )
}

export default Clireuseable