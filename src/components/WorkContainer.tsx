import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { WorkInfo } from "../types/WorkType";
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/WorkContainer.css';

const WorkContainer = ({company, work_title, technologies, description, logo}: WorkInfo) => {
    return (
        <Container className="WorkContainer-Container">
            <Card className="WorkContainer-Card">
                <Card.Img className="WorkContainer-Picture" variant="bot" src={require("../assets/IMG_4727.jpeg")} />
                <Card.Body>
                    <Card.Title>{company}</Card.Title>
                    <Card.Text>
                    {work_title}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default WorkContainer