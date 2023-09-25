import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import CSS from 'csstype';
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/Navbar.css';


const Navbar = () => {

    const [navColor, setnavColor] = useState("transparent");
    const [navSize, setnavSize] = useState("10rem");

    const isHome = true;

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("rgba(52, 52, 52, 0.4)") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
      };
      useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
          window.removeEventListener("scroll", listenScrollEvent);
        };
      }, []);

    return (
        <div className="Navbar-Container" style={{backgroundColor: navColor, height: navSize, transition: "all 1s", color: "white"}}>
            <Row>
                <Col xs={6} className="NavBar-Socials">
                    <Link to="https://www.linkedin.com/in/yunqing-shirley-huang/">
                        <img src={require('../assets/svg/linkedin.svg').default} alt='mySvgImage' />
                    </Link>
                    <Link to="https://github.com/ShirleyofHuang">
                        <img src={require('../assets/svg/github.svg').default} alt='mySvgImage' />
                    </Link>
                    {/* <img src={require('../assets/svg/email.svg').default} alt='mySvgImage' /> */}
                </Col>
                <Col xs={6} className="NavBar-Directory">
                    <Link to="/">
                        <p>home</p>
                    </Link>
                    <Link to="/travels">
                        <p>travels</p>
                    </Link>
                </Col>
                {/* <Col>Projects</Col>
                <Col>Library</Col> */}
            </Row>
        </div>
    )
}

export default Navbar