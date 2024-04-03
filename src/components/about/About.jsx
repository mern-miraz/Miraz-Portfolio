import React from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap'
import about_img from "../../assets/about.png"

const About = () => {
  return (
    <>
    <section id='about'>
    <Container className='about'>
        <Row className='about_main'>
        <Col lg={5} className='img'>
            <img src={about_img} alt="" />
        </Col>
        <Col lg={{span:6, offset:1}}>
        <div className="about_text">
            <h4>about me</h4>
            <h2>React JS Developer from Bangladesh</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
            <p>Tabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
        </div>
        <Row className='add_main'>
            <Col lg={6}>
                <div className="add_text">
                <h4>Name</h4>
                <p>Mirazul Islam</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className="add_text">
                <h4>Age</h4>
                <p>25 Years</p>
                </div>
            </Col>
            <Col lg={6}>
            <div className="add_text">
            <h4>Email</h4>
                <p><a href="mailto:w3miraj@gmail.com">w3miraj@gmail.com</a></p>
            </div>
            </Col>
            <Col lg={6}>
                <div className="add_text">
                <h4>education</h4>
                <p>Bachelor of CSE</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className="add_text">
                <h4>phone</h4>
                <p> <a href="tel:+8801796096261">+880 017 960 962 61</a> </p>
                </div>
            </Col>
            <Col lg={6}>
                <div className="add_text">
                <h4>freelace</h4>
                <p>Avialable</p>
                </div>
            </Col>
            <Col lg={6}>
            <div className="about_cv"> <a href="#">download cv</a> </div>
            </Col>
        </Row>
        </Col>
        </Row>
    </Container>
    <Container className='about_one'>
        <Row className='about_1'>
            <Col lg={6}>
                <div className="about_1_text">
                    <h4>my skills</h4>
                    <h2>I'm great in what I do and I'm loving it</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariat non proident, sunt in culpa qui officia deserunt laborum.</p>
                </div>
            </Col>
            <Col lg={6}>
                <Row >
                    <Col lg={12} className='line_main'>
                    <div className="line_1">
                    <h3>Competitive Programming</h3>
                    <h4>84%</h4>
                    </div>
                    <div className="line1_line"></div>
                    </Col>

                    <Col lg={12}>
                    <div className="line_1">
                    <h3>Algorithm & Data Structure</h3>
                    <h4>50%</h4>
                    </div>
                    <div className="line2_line"></div>
                    </Col>
                    
                    <Col lg={12}>
                    <div className="line_1">
                    <h3>Game Development</h3>
                    <h4>75%</h4>
                    </div>
                    <div className="line3_line"></div>
                    </Col>

                    <Col lg={12}>
                    <div className="line_1">
                    <h3>Web Application</h3>
                    <h4>96%</h4>
                    </div>
                    <div className="line4_line"></div>
                    </Col>

                </Row>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default About