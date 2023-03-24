import React from 'react'
import "../css/menu.css"
import {IoClose} from "react-icons/io5"

const menu = ({close}) => {
  return (
    <div>
        <div className='menu'>
            <IoClose onClick={()=>close(false)} className='close'/>
            <p><a onClick={()=>close(false)} href='#home'>Home</a></p>
            <p><a onClick={()=>close(false)} href='#aboutme'>About me</a></p>
            <p><a onClick={()=>close(false)} href='#workhistory'>Work history</a></p>
            <p><a onClick={()=>close(false)} href='#socialmedia'>Social media</a></p>
            <p><a onClick={()=>close(false)} href='https://medium.com/@mukembileviticus'>Blog</a></p>
        </div>
        <div className='menu_close' onClick={()=>close(false)}/>
    </div>
  )
}

export default menu