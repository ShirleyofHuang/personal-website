import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/Navbar.css';


const Navbar = () => {
    return (
        <div className="Navbar-Container">
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