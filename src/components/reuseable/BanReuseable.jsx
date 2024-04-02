import React from 'react'
import "./Banreuseable.css"

const BanReuseable = ({icon,title,description}) => {
  return (
    <>
            <div className="card">
                <i>{icon}</i>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
    </>
  )
}

export default BanReuseable