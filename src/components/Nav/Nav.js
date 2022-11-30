import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"
import {MdWorkOutline} from "react-icons/md"
import {MdMiscellaneousServices} from "react-icons/md"
import {BsFillBagFill} from "react-icons/bs"
import {AiOutlineContacts} from "react-icons/ai"
import {useState} from "react"

const Nav = () => {
  const [activeNav,setActiveNav] = useState("#")
  return (
    <>
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active":""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active":""}><FcAbout/></a>
      <a href="#experiance " onClick={() => setActiveNav("#experiance")} className={activeNav === "#experiance" ? "active":""}><MdWorkOutline/></a>
      <a href="#sevices" onClick={() => setActiveNav("#sevices")} className={activeNav === "#services" ? "active":""}><MdMiscellaneousServices/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active":""}><BsFillBagFill/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active":""}><AiOutlineContacts/></a>
    </nav>
   </>
  )
}

export default Nav