import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo2023.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';




export default function NavBar () {

  // state to track which link is active (home, about, skills, projects)
  const [activeLink, setActiveLink] = useState('home');
  // state to track when user is scrolling
  const [scrolled, setScrolled] = useState(false);

  // triggered when user scrolls
  useEffect(() => {
    // function to update scrolling state
    const onScroll = () => {
    // check if user has scrolled more than 50px
    if (window.scrollY > 50) {
      // set state to true
      setScrolled(true)
    } else {
      // set state to false
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
}, []);

const onUpdateActiveLink = (value) => {
  setActiveLink(value)

  // scroll to section based on active link
  const section = document.querySelector(`#${value}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

}


  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img className='logo' src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* to highlight the active link with css, we need to add a class to the active link */}
            <Nav.Link href="#journey" className={activeLink === 'journey' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('journey')}>My Journey</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
          <div className="social-icons">
            <a href="https://github.com/benhensor" rel="noreferrer" target='_blank'><img src={navIcon1} alt='Github'/> </a>
            <a href="https://www.linkedin.com/in/benhensor/" rel="noreferrer" target='_blank'><img src={navIcon2} alt=''/> </a>
            <a href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm" rel="noreferrer" target='_blank'><img src={navIcon3} alt=''/> </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect!</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}