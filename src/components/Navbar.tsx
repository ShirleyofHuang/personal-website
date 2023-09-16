import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/Navbar.css';


const Navbar = () => {
    return (
        <div className="Navbar-Container">
            <Row>
                <Col>Home</Col>
                <Col></Col>
                <Col>Projects</Col>
                <Col>Library</Col>
            </Row>
        </div>
    )
}

export default Navbar