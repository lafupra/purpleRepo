import React from 'react'
import styled from "styled-components"

const Section = styled.div`

width:100%;
margin-top:5rem;
gap:8rem;
flex-wrap:wrap;

`
const CardContainer = styled.div`
width:30rem;
flex-direction:column;
background-color:var(--color-bg-varient);
border-radius:2rem;
transition:var(--transition);
&:hover{
  background-color:transparent;
  border:1px solid white;
}
`

const TimageContainer = styled.div`
width:100%;
justify-content:center;
margin-top:1rem;

`
const ImageBg = styled.div`
background-color:var(--color-primary);
border-radius:50%;

`
const Timage = styled.img`
width:5rem;
height:5rem;
margin:0.4rem;
border-radius:50%;
object-cover:fit;

`

const TcardText = styled.div`
padding:0.3rem 1rem;
font-size:1.3rem;
font-weight:800;

`

const TcardDesc= styled.div`
width:100%;
padding:1rem 2rem 2.5rem 2rem;

`


const Testimonials = () => {
  return (
    <>
   <Section id="testimonials" className="flex" >
    <CardContainer className="flex">
      <TimageContainer className="flex ">
        <ImageBg >
        <Timage src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?cs=srgb&dl=pexels-mateus-souza-3586798.jpg&fm=jpg" alt="no data" className="flex "/>
        </ImageBg>
        </TimageContainer>
        <TcardText className="flex">
          julia magna
        </TcardText>
        <TcardDesc className="flex-start">
          lorem useImperativeHandlef dsfaiof fsadfasiuofaiuf
          sdfhasfhasdfjioafjaosdjfasfjaosifdjaiofdjasfasdfkja
          dgiasfgajiofjasdiofjsdfiosjposjfsafjsdfjsdfsajiodfdsfasf
          asfafdsf
          dfgsdgsdgsdgdsg
        </TcardDesc>
    </CardContainer>

    <CardContainer className="flex">
      <TimageContainer className="flex ">
        <ImageBg >
        <Timage src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?cs=srgb&dl=pexels-mateus-souza-3586798.jpg&fm=jpg" alt="no data" className="flex "/>
        </ImageBg>
        </TimageContainer>
        <TcardText className="flex">
          julia magna
        </TcardText>
        <TcardDesc className="flex-start">
          lorem useImperativeHandlef dsfaiof fsadfasiuofaiuf
          sdfhasfhasdfjioafjaosdjfasfjaosifdjaiofdjasfasdfkja
          dgiasfgajiofjasdiofjsdfiosjposjfsafjsdfjsdfsajiodfdsfasf
          asfafdsf
          dfgsdgsdgsdgdsg
        </TcardDesc>
    </CardContainer>

    <CardContainer className="flex">
      <TimageContainer className="flex ">
        <ImageBg >
        <Timage src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?cs=srgb&dl=pexels-mateus-souza-3586798.jpg&fm=jpg" alt="no data" className="flex "/>
        </ImageBg>
        </TimageContainer>
        <TcardText className="flex">
          julia magna
        </TcardText>
        <TcardDesc className="flex-start">
          lorem useImperativeHandlef dsfaiof fsadfasiuofaiuf
          sdfhasfhasdfjioafjaosdjfasfjaosifdjaiofdjasfasdfkja
          dgiasfgajiofjasdiofjsdfiosjposjfsafjsdfjsdfsajiodfdsfasf
          asfafdsf
          dfgsdgsdgsdgdsg
        </TcardDesc>
    </CardContainer>
    </Section>
   </>
  )
}

export default Testimonials