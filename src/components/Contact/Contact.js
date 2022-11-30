import React from 'react'
import styled from 'styled-components'
import {AiOutlineMail} from "react-icons/ai"
import {BsMessenger} from "react-icons/bs"
import {FaWhatsappSquare} from "react-icons/fa"


const Section = styled.div`

`

const ContactContainer = styled.div`

width:80vw;


`

const H5 = styled.h5`

`

const H2 = styled.h2`
color:var(--color-primary);
`
const ContactSide = styled.div`

display:flex;
flex-direction:column;
gap:2rem;


`

const ContactInput = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:1rem;
`
const ContactCard = styled.div`
background-color:var(--color-bg-varient);
border-radius:1.3rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:15rem;
height:12rem;
gap:0.2rem;
transition:var(--transition);
&:hover{
  background-color:transparent;
  border:1px solid white;
}

`
const FormInput = styled.input`
padding:1rem 8rem;
border-radius:0.5rem;
background-color:transparent;
border:1px solid var(--color-primary);
transition:var(--transition);
&:hover{
  background-color:var(--color-bg-varient);
  border:1px solid white;
}

`

const FormButton= styled.button`

`

const ContactHeading = styled.div`
margin:3rem 0rem;

`

const MainContactSec = styled.div`
align-items:flex-start;
gap:5rem;
@media screen and (max-width:800px){
  flex-direction:column;
  align-items:center;
}

`


const Icon = styled.div`


`

const Name = styled.div`
font-size:1.5rem;
weight:600;

`

const Email = styled.div`

`
const  SendMessage = styled.div`

`



const Contact = () => {
  return (<>
  <Section   id="contact" className="flex">
    <ContactContainer   className="flex-column">



      <ContactHeading className="flex-column">
      <H5 className="flex">
      contact
     </H5>
     <H2 className="flex">
      Contact Me
     </H2>
      </ContactHeading>


      <MainContactSec  className="flex">

      <ContactSide className="flex-column">
      <ContactCard className="flex-column">
        <Icon>
        <AiOutlineMail style={{width:"3rem",height:"3rem"}}/>

        </Icon>
        <Name>
          Email
        </Name>
        <Email>
        cpraful968@gmail.com
        </Email>
        <SendMessage>
        Send a Message
        </SendMessage>
      </ContactCard>



      <ContactCard className="flex-column">
      <Icon>
        <BsMessenger style={{width:"3rem",height:"3rem"}}/>

        </Icon>
        <Name>
          Messanger
        </Name>
        <Email >
     no messanger
        </Email>
        <SendMessage>
        Send a Message
        </SendMessage>
      </ContactCard>
      <ContactCard className="flex-column">
      <Icon>
      <FaWhatsappSquare style={{width:"3rem",height:"3rem"}} />

        </Icon>
        <Name>
          WhatsApp
        </Name>
        <Email>
   9328154895
        </Email>
        <SendMessage>
    Send a Message
        </SendMessage>
      </ContactCard>
     </ContactSide>



     <ContactInput className="flex-column">
      <FormInput placeholder='your name'/>
      <FormInput placeholder='your email' />
      <FormInput placeholder="your message" style={{height:"8rem"}}/>
      <FormButton className="btn btn-primary">Submit</FormButton>
     </ContactInput>

      </MainContactSec>

   
    </ContactContainer>  
  </Section>
  </>
    
  )
}

export default Contact