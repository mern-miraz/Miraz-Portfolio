import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import BanReuseable from '../reuseable/BanReuseable';
import { FaReact } from "react-icons/fa";
import { BsRocket } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import Clireuseable from '../reuseable/Clireuseable';
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaToolboxSolid } from "react-icons/lia";
import { TfiCup } from "react-icons/tfi";
import CountUp from 'react-countup';



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
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  'I am a Back-end Developer',
                  3000,
                  'I am a React JS Developer',
                  3000,
                  'I am a Full Stack Developer',
                  3000
                ]}
                wrapper="span"
                speed={150}
                style={{ fontSize: '2em', display: 'inline-block'}}
                repeat={Infinity}
              />
              </div>

              <div className="ban_btn">
                <a href="#contact" className="btn_one">hire me</a>
                <a href="#about" className="btn_two">about me</a>
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

                <Col lg={4}><BanReuseable icon={<IoDiamond/>} title="Dedication" description="Beaboris nisi ut aliquip ex ea commodo consen cillum dolore eu fugiat nulla pariatur." /></Col>
                
                <Col lg={4}><BanReuseable icon={<BsRocket/>} title="Hard Work" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offi llit anim id est laborum."/></Col>
          </Row>
        </Container>
        
        <Container className='cli-main'>
          <Row className='cli'>
            <Col lg={3} className='cli_one'>
              <Clireuseable icon_two={<BsBoxSeam />} icon_text="Digital Products" cli_count={<CountUp start={0} end={30}></CountUp>} />
            </Col>
            <Col lg={3} className='cli_two'>
            <Clireuseable icon_two={<HiOutlineUsers/>} icon_text="Clients Wordwide" cli_count={<CountUp start={0} end={200}></CountUp>} />
            </Col>
            <Col lg={3} className='cli_three'>
            <Clireuseable icon_two={<LiaToolboxSolid/>} icon_text="Total Projects" cli_count={<CountUp start={0} end={950}></CountUp>} />
            </Col>
            <Col lg={3} className='cli_four'>
            <Clireuseable icon_two={<TfiCup/>} icon_text="Awards Won" cli_count={<CountUp start={0} end={19}></CountUp>} />
            </Col>
          </Row>
        </Container>
        </section>
    </>
  )
}

export default Banner