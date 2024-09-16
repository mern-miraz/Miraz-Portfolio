import React from 'react'
import "./menu.css"
import {Container, Navbar, Nav, Row} from 'react-bootstrap'
import { IoIosHome, IoIosContact } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LiaToolboxSolid } from "react-icons/lia";
import { MdOutlineSettings } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import ScrollspyNav from "react-scrollspy-nav";




const Menu = () => {
  return (

<Navbar expand="xl" className="menu_bg">
      <Container>
        <Navbar.Brand href="#home" className='Mir_name'><h3>M<span>ira</span>Z</h3></Navbar.Brand>
        <div className="nav_cv"> <a href="#">download cv</a> </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav_main-1'>
              <ul className='nav_main_one'>
                <li> <a href="#home" > <i><IoIosHome /></i> <span>Home</span></a> </li>
                <li> <a href="#about" > <i><IoIosContact /></i> <span>About</span></a> </li>
                <li> <a href="#protfolio" > <i><LiaToolboxSolid /></i> <span>Protfolio</span></a> </li>
                <li> <a href="#service" > <i><MdOutlineSettings /></i> <span>Service</span></a> </li>
                <li> <a href="#contact" > <i><TbMailOpenedFilled /></i> <span>Contact</span></a> </li>
              </ul>
            

            <ul className='nav_social_one'>
            <li> <a href="https://www.facebook.com/mernMiraz/" className='fac1'> <i><FaFacebookF/></i> </a> </li>
                <li> <a href="#" className='twit1'> <i><FaTwitter/></i> </a> </li>
                <li> <a href="#" className='link1'> <i><FaLinkedin/></i> </a> </li>
                <li> <a href="#" className='insta1'> <i><FaInstagram/></i> </a> </li>
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
                <li> <a href="https://www.facebook.com/mernMiraz/" className='fac1'> <i><FaFacebookF/></i> </a> </li>
                <li> <a href="#" className='twit1'> <i><FaTwitter/></i> </a> </li>
                <li> <a href="#" className='link1'> <i><FaLinkedin/></i> </a> </li>
                <li> <a href="#" className='insta1'> <i><FaInstagram/></i> </a> </li>
              </ul>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu