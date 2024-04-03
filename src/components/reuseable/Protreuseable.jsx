import React from 'react'
import "./protreuseable.css"

const Protreuseable = ({finsweet,title,description,button}) => {
  return (
    <>
    <div className="port_card">
        <img src={finsweet} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{button}</span>
    </div>
    </>
  )
}

export default Protreuseable