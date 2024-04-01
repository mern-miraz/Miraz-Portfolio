import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';


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
                    
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

                </Col>
            </Row>
        </Container>
        </section>
    </>
  )
}

export default Banner