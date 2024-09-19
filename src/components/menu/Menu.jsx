import React from 'react'
import "./menu.css"
import {Container, Navbar, Nav, Row} from 'react-bootstrap'
import { IoIosHome, IoIosContact } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa";
import { LiaToolboxSolid } from "react-icons/lia";
import { MdOutlineSettings } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import ScrollspyNav from "react-scrollspy-nav";
import mirazCV from "../../assets/MIRAZUL_ISLAM_CV.pdf"




const Menu = () => {
  return (

<Navbar expand="xl" id='home' href="#home" className="menu_bg">
      <Container>
        <Navbar.Brand  className='Mir_name'><h3>MIRAZ</h3></Navbar.Brand>
        <div className="nav_cv">  <a target='_blank' href={mirazCV} download>download cv</a> </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav_main-1'>
              <ul className='nav_main_one'>
                <li> <a href="#home" > <i><IoIosHome /></i> <span>Home</span></a> </li>
                <li> <a href="#about" > <i><IoIosContact /></i> <span>About</span></a> </li>
                <li> <a href="#protfolio" > <i><LiaToolboxSolid /></i> <span>Protfolio</span></a> </li>
                <li> <a href="#service" > <i><MdOutlineSettings /></i> <span>Service</span></a> </li>
                <li> <a href="#contact" > <i><TbMailOpenedFilled /></i> <span>Contact</span></a> </li>
                <li><div className="nav_cv_one">  <a target='_blank' href={mirazCV} download>download cv</a> </div></li>
              </ul>
            

            <ul className='nav_social_one'>
            <li> <a target='_blank' href="https://www.facebook.com/mern.miraz/" className='fac1'> <i><FaFacebookF/></i> </a> </li>
                <li> <a target='_blank' href="https://www.linkedin.com/in/mern-miraz/" className='link1'> <i><FaLinkedin/></i> </a> </li>
                <li> <a target='_blank' href="https://github.com/mern-miraz" className='insta1'> <i><FaGithub /></i> </a> </li>
            </ul>
          </Nav>
          
          <div>
          <ScrollspyNav
                    scrollTargetIds={["home", "about", "protfolio", "contact"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
            <ul className='nav_main'>
                <li> <a href="#home" className='nav-link'> <i><IoIosHome /></i> <span>Home</span></a> </li>
                <li> <a href="#about" className='nav-link'> <i><IoIosContact/></i> <span>About</span></a> </li>
                <li> <a href="#protfolio" className='nav-link'> <i><LiaToolboxSolid/></i> <span>Protfolio</span></a> </li>
                <li> <a href="#" className='nav-link'> <i><MdOutlineSettings/></i> <span>Service</span></a> </li>
                <li> <a href="#contact" className='nav-link'> <i><TbMailOpenedFilled/></i> <span>Contact</span></a> </li>
              </ul>
              </ScrollspyNav>

              <ul className="nav_social">
                <li> <a target='_blank' href="https://www.facebook.com/mern.miraz/" className='fac1'> <i><FaFacebookF/></i> </a> </li>
                <li> <a target='_blank' href="https://www.linkedin.com/in/mern-miraz/" className='link1'> <i><FaLinkedin/></i> </a> </li>
                <li> <a target='_blank' href="https://github.com/mern-miraz" className='insta1'> <i><FaGithub /></i> </a> </li>
              </ul>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu