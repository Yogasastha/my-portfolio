import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { ContactButton } from './NavbarStyledComponent';
import { Bio } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();



  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            {/* <DiCssdeck size="3rem" />  */}
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/815/881/non_2x/portfolio-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
              alt="Portfolio Logo"
              style={{
                width: "35px",
                height: "35px",
                marginRight: "10px",
                borderRadius: "50%",  // Makes the logo circular
                objectFit: "cover",   // Ensures the image fills the circle properly
                border: "2px solid white" // Optional: Adds a border for better visibility
              }}
            />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <ContactButton href="mailto:yogasasthak@gmail.com">
            Contact Me
          </ContactButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <a href={Bio.contactEmail} style={{ padding: '10px 16px', background: theme.primary, color: 'white', textDecoration: 'none', borderRadius: '5px', width: 'max-content' }}>
              Contact Me
            </a>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
