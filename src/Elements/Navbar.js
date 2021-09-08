
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import React, { useState } from 'react';

const links = [
  {
    name: "Acerca del proyecto",
    link: ""
  },
  {
    name:"Mapa",
    link: "/Mapa"
  },
  {
    name:"Dashboard",
    link:"/Dashboard"
  }
];

const Navbar_ = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = window.location.pathname;
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="">
            <a>
              <img src="http://simpleicon.com/wp-content/uploads/map-7.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
            </a>
            SIG-UNIMET
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>  
            {links.map((link) =>(
              <NavItem className={link.link === currentPath ? "active" : "notActive"}>
                <NavLink href={link.link}> {link.name} </NavLink>
              </NavItem>
            ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Navbar_;
  