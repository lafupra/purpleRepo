import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {BsDribbble} from "react-icons/bs"

export const HeaderSocial = () => {
  return (
    <>
    <div className="header_socials">
        <a href="https://linkedin.com" rel="noreferrer" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com" rel="noreferrer" target="_blank"><BsGithub/></a>
        <a href="https://dribble.com" rel="noreferrer" target="_blank"><BsDribbble/></a>
    </div>
    </>
   
  )
}

export default HeaderSocial
