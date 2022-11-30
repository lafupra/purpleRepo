import "./About.css"
import {BsAward} from "react-icons/bs"

const About = () => {
  return (
    <>
      <section id="about">
        <h5> Get to know </h5>
        <h2> About Me </h2>

        <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg" alt="about image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icon"/>
              <h5>experiance</h5>
              <small> 3+ years work experiance</small>
            </article>

            <article className="about_card">
              <BsAward className="about_icon"/>
              <h5>client</h5>
              <small> 200+</small>
            </article>



            <article className="about_card">
              <BsAward className="about_icon"/>
              <h5>Projects</h5>
              <small> 80+</small>
            </article>

          </div>

         <p>
          lorem ipsmdsgajsdofjaposmdfpads
          sdgfaosdfsadf\sdfasdiogjasa
          svnsadgjpasokfasf

         </p>

         <a href="#contact" className="btn btn-primary">Let's tallk</a>
          </div>

          </div>
      
      </section>
    </>
  
  )
}

export default About