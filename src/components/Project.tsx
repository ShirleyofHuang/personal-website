import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { ProjectInfo } from "../types/ProjectType";
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/Project.css';

const ProjectCard = ({title, description, technologies, link, logo} : ProjectInfo) => {
    return (
        <div className="ProjectCard-Container">
            <Card className="ProjectCard-Card">
                <Card.Img className="ProjectCard-Image" variant="top" src={require(`../assets/${logo}`)} />
                <Card.ImgOverlay className="ProjectCard-Overlay">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <Row>
                        {technologies.join(" | ")}
                    </Row>
                    <Button className="buttons">
                            <a className="links" href={link}>
                                see github
                            </a>
                    </Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default ProjectCard