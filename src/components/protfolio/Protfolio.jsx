import React from 'react'
import "./protfolio.css"
import { Col, Container, Row } from 'react-bootstrap'
import Protreuseable from '../reuseable/Protreuseable'
import finsweet_img from "../../assets/finsweet.png"
import Aero_Page from "../../assets/aeropage.png"
import mary_img from "../../assets/mary.png"
import emprise_img from "../../assets/emprise.png"
import newspro_img from "../../assets/newspro.png"

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
                    <Protreuseable finsweet={finsweet_img} title="Finsweet 10 Page Website" description="10 pages Finsweet Website build by html, css, java script, react, react-bootstrap." button={<a href="https://darling-brigadeiros-06e81a.netlify.app/" target='_blank'>Live Site</a>}/>
                </Col>
                <Col lg={4}>
                    <Protreuseable finsweet={Aero_Page} title="AeroPage" description="AeroPage Website build by html, css, java script, react, react-bootstrap. It's a singlepage website" button={<a href="https://aeropage.netlify.app/" target='_blank'>Live Site</a>}/>
                </Col>
                <Col lg={4}>
                    <Protreuseable finsweet={mary_img} title="Mary" description="mary Website build by html, css, java script, react, react-bootstrap. It's a singlepage website" button={<a href="https://comfy-cascaron-854aac.netlify.app/" target='_blank'>Live Site</a>}/>
                </Col>
                <Col lg={4}>
                    <Protreuseable finsweet={emprise_img} title="Emprise" description="Emprise Website build by html, css, java script, react, react-bootstrap. It's a singlepage website" button={<a href="https://classy-taffy-7ba676.netlify.app/" target='_blank'>Live Site</a>}/>
                </Col>
                <Col lg={4}>
                    <Protreuseable finsweet={newspro_img} title="NewsPro" description="NewsPro Website build by html, css, java script, react, react-bootstrap. It's a singlepage website" button={<a href="https://marvelous-pasca-ddcc96.netlify.app/" target='_blank'>Live Site</a>}/>
                </Col>

            </Row>
            
        </Container>
    </section>
    </>
  )
}

export default Protfolio