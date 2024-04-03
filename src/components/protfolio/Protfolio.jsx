import React from 'react'
import "./protfolio.css"
import { Col, Container, Row } from 'react-bootstrap'

const Protfolio = () => {
  return (
    <>
    <section id='protfolio'>
        <Container className='prot'>
            <Row className='prot_main'>
                <Col lg={12}>
                    <div className="port_text">
                        <h2>portfolio</h2>
                        <p>Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est.</p>
                    </div>
                </Col>

                <Col lg={4}>
                    <Protfolio/>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Protfolio