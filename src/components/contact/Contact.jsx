import React from 'react'
import "./contact.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  return (
    <>
    <section id='contact'>
    <Container className='contact'>
        <Row className='contact_main'>
        <Col lg={12}>
            <div className="contact_text">
                <h3>get in touch</h3>
                <p>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est.</p>
            </div>
        </Col>

        <Form>
        <Col lg={{span:10, offset:1}}>
                    <Row className='form_main'>
                        <Col lg={6}>
                        <label for="name">Name</label>
                          <input type="text" class="form-control name" placeholder="Enter your name" aria-label="Enter your name" id="name" required />
                        </Col>
                        <Col lg={6}>
                        <label for="email">Email</label>
                          <input type="email" class="form-control" placeholder="Enter your Emial" aria-label="Enter your Emial" id="email" required />
                        </Col>
                        <Col lg={12}>
                        <label for="msg">Message</label>
                            <textarea name="" id="msg" class="form-control msg" cols="30" rows="6" placeholder="Write your Message here" required></textarea>
                        </Col>
                        <div class="form_btn">
                          <button type="submit" class="btn">Send Messege</button>
                        </div>
                    </Row>
                </Col>
                </Form>
        </Row>
        <ScrollToTop smooth />
    </Container>
    </section>
    </>
  )
}

export default Contact