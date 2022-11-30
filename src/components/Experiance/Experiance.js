import React from 'react'
import "./Experiance.css"
import {BsCheckSquare} from "react-icons/bs"



const Experiance = () => {
  return (<>

   <section id="experiance">
         <h5>Experiance</h5>
   <h5> what skills i have</h5>
   <h2>my experiance</h2>

   <div className="container experiance_container">

    <div className="expriance_frontend">

    <h3>front end development</h3>

      <div className="experiance_content">


        <div className="experiance_details">
        <BsCheckSquare  className="experiance_details-icon"/>
        <div>
        <h4>HTML</h4>
        <small className="text-light"> Experianced </small>
        </div>
        </div>
        

        <article className="experiance_details">
        <BsCheckSquare  className="experiance_details-icon" />
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>

        </article>
        <article  className="experiance_details">
        <BsCheckSquare  className="experiance_details-icon" />
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>

        </article>
        <article  className="experiance_details">
        <BsCheckSquare  className="experiance_details-icon" />
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>
        </article>

        <article  className="experiance_details">
        <BsCheckSquare  className="experiance_details-icon" />
        <div  >
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>
        </article>
    </div>

    </div>


    <div className="experiance_backend">

    <h3> back end development</h3>
      <div className="experiance_content">
        <article className="experiance_details">
        <BsCheckSquare className="experiance_details-icon"/>
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>

        </article>
        <article className="experiance_details">
        <BsCheckSquare className="experiance_details-icon"/>
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>

        </article>
        <article  className="experiance_details">
        <BsCheckSquare className="experiance_details-icon"/>
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>

        </article>
        <article className="experiance_details">
        <BsCheckSquare className="experiance_details-icon"/>
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>

        </article>
        <article  className="experiance_details">
        <BsCheckSquare className="experiance_details-icon"/>
        <div>
        <h5>HTML</h5>
        <small className="text-light"> Experianced </small>
        </div>

        </article>
    </div>

   </div>

   </div>
   </section>
   

  </>
   
  )
}

export default Experiance