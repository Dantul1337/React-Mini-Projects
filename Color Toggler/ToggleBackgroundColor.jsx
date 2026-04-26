import React from 'react'
import '../index.css'
import { useState } from 'react'
const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('#1b1b1b')
  const [buttonStyle, setButtonStyle] = useState('white')

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white")
    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
    setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white')
  }
  return (
    <div style={{backgroundColor, color: textColor}}>
        <button onClick={handleClick} style={{buttonStyle, color: textColor, border: `2px solid ${textColor}`}}>Toggle Theme</button>
        { backgroundColor == '#1b1b1b' ? "Black Theme" : "White Theme"}
        <section className="content">
            <h1>Welcome to a <br /> new world!</h1>
        </section>
    </div>
  )
}

export default ToggleBackgroundColor