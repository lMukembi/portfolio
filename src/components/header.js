import React, { useState } from 'react'
import Mukembilogo from "../resouces/Mukembilogo.png"
import {BiMenu} from "react-icons/bi"
import "../css/header.css"
import Menu from "../components/menu"

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='header' id='home'>
        <img src={Mukembilogo} alt="Mukembi logo" className='logo'/>
        <p>Mukembi's portfolio.</p>
        {window.innerWidth < 768 && <BiMenu className='home_menu' onClick={()=>setMenu(!menu)}/>
        }
        {menu&&(<Menu close={setMenu}/>)}
        {window.innerWidth >769 &&
        <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#aboutme'>About me</a></p>
        <p><a href='#workhistory'>Work history</a></p>
        <p><a href='#socialmedia'>Social media</a></p>
        <p><a href='https://medium.com/@mukembileviticus'>Blogs</a></p>
        </>
        }
    </div>
  )
}

export default Header