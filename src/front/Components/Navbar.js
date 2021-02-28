import React from 'react';
import Nav from 'react-bootstrap/Nav';


const Navbar = () =>{
    return(
        <div className="navbar">
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item className="navlinks">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/assistance">Get help!</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
export default Navbar;