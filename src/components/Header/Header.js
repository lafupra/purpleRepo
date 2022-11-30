import React from 'react'
import"./Header.css"
import CTA from "./CTA"
import HeaderSocial from "./HeaderSocial"

const Header = () => {
  return (
    <>
    <header>
      <div className="container header_container">
        <h5>
          hello i'm
        </h5>
        <h1>
          praful chauhan
        </h1>
        <h5 className="text-light">
          fullstack developer
        </h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg" className="meimg"alt="no-img"/>
        </div>
        <a href = "#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
    </>
   
  )
}

export default Header