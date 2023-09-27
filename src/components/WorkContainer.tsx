import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { WorkInfo } from "../types/WorkType";
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/WorkContainer.css';

const WorkContainer = ({company, work_title, technologies, dates, description, logo}: WorkInfo) => {
    return (
        <Container className="WorkContainer-Container">
            <Row className="WorkContainer-Row">
                <Col xs={9}>
                    <h1 className="WorkContainer-title">{company}</h1>
                </Col>
                <Col xs={3} className="WorkContainer-Col">
                     <p className="WorkContainer-date">{dates}</p> 
                </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>{work_title}</h3>
                    </Col>
                </Row>
            <p>{description}</p>
            <p>{technologies.join(" | ")}</p>
        </Container>
    )
}

export default WorkContainer