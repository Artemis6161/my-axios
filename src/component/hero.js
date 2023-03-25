import React from 'react'

import "./hero.css"
const hero = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.heroImage} alt="Img" />
    
    <div className="hero_text">
<h1>{props.title}</h1>
<p>{props.text}</p>
<a href={props.url} className={props.btnClass}>{props.buttonText}</a>
    </div>
    </div>
  )
}

export default hero
