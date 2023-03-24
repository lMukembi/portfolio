import React from 'react'
import "../css/intro.css"

const intro = () => {
  return (
    <div className='intro'>
        <h3 className='greetings'>Hello there, I'm</h3>
        <h1 className='name'>Mukembi Leviticus.</h1>
        <p>I'm a Full-stack web developer, Technoking, Electric cars devotee, and Entrepreneur based in Nairobi, Kenya.</p>
        <div>
            <button className='call_me'><a href="tel:0725540469">Call now</a></button>
            <button className='email_me'><a href="mailto:mukembileviticus@gmail.com">Send email</a></button>
        </div>
    </div>
  )
}

export default intro