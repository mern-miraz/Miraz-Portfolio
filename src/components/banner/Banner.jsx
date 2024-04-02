import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import BanReuseable from '../reuseable/BanReuseable';
import { FaReact } from "react-icons/fa";
import { BsRocket } from "react-icons/bs";



const Banner = () => {
  return (
    <>
        <section id='home'>
        <Container>
            <Row className='ban_main'>
                <Col lg={{span:10, offset:1}}>
                    <div className="imag_1"> </div>
                    <h1 className='name'>
                      <small>Hello There, I'm</small>
                      <strong>Mirazul </strong> Islam
                    </h1>
                  
              <div className="type_anim">
                <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'I am a Front-end Developer',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'I am a Back-end Developer',
                  2000,
                  'I am a React Developer',
                  2000,
                  'I am a Full Stack Developer',
                  2000
                ]}
                wrapper="span"
                speed={300}
                style={{ fontSize: '2em', display: 'inline-block'}}
                repeat={Infinity}
              />
              </div>

              <div className="ban_btn">
                <a href="" className="btn_one">hire me</a>
                <a href="" className="btn_two">about me</a>
              </div>

                </Col>
            </Row>
        </Container>

        <Container className='world_main'>
          <Row className='world'>
                <Col lg={12}>
                <div className="world_text">
                  <h3>welcome to my world</h3>
                  <p>I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in DHAKA City.</p>
                </div>
                </Col>
                <Col lg={4}><BanReuseable icon={<FaReact/>} title="Creativity" description="Duis aute irure dolor in it esse cillum fugiat nulla pari erunt mollit anim id est laborum." /></Col>

                <Col lg={4}><BanReuseable icon={<BsRocket/>} title="Dedication" description="Beaboris nisi ut aliquip ex ea commodo consen cillum dolore eu fugiat nulla pariatur." /></Col>
                
                <Col lg={4}><BanReuseable/></Col>
          </Row>
        </Container>
        </section>
    </>
  )
}

export default Banner