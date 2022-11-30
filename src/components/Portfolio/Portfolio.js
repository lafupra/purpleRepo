import React from 'react'
import "./Portfolio.css"
import {pdata} from "./portfoliodata"

const Portfolio = () => {
  return (
    <>
 <section id="portfolio">
<div className="portfoliocontainer">

  {pdata.map((items) => (<div className="cardcontainer">

    <div className="imagecontainer">
    <img src={items.img} className="cardimg" alt="no"/>
    </div>
   <div className="cardtext">
   {items.cardtext}

   </div>
   <div className="cardbuttons">
   <a href="https://github.com" className="btn" download>download cv</a>
    <a href="#contact" className="btn btn-primary">let's talk</a>
   </div>

  </div>))}

</div>
 </section>
  </>
  )
}

export default Portfolio