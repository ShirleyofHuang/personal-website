import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import ProjectCard from "../components/Project";
import { ProjectInfo } from "../types/ProjectType";
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/Navbar.css';

const cards = [
    {
        title: "Klear", 
        technologies: ["React Native", "MySQL", "Node.JS", "OneSignal", "AWS"], 
        description: "Security monitoring software",
        logo: "klear_logo.png", 
        link: "https://github.com/ShirleyofHuang/Klear-Frontend/"
    },
    {
        title: "Erentzen", 
        technologies: ["React", "MongoDB", "Node.JS", "Heroku"], 
        description: "Shopify web extension", 
        logo: "shopify.webp",
        link: "https://github.com/ShirleyofHuang/Erentzen-Shopify"},
    {
        title: "Personal Website", 
        technologies: ["React Typescript", "HTML", ],
        logo: "qrency.png", 
        description: "My personal website you're currently on :)", 
        link: ""},
    {
        title: "QRency",
        technologies: [], 
        logo: "qrency.png",
        description: "ATM Hackathon project that won 1st place",
        link: ""},
    {
        title: "Java Game",
        technologies: [],
        logo: "bossforest.png",
        description: "Android game made using Java", 
        link: ""},
    {
        title: "Simon Says", 
        technologies: [], 
        logo: "qrency.png",
        description: "Verilog game", 
        link: ""}
]

const ProjectsPage = () => {
    return (
        <Container className="ProjectsPage-Container">
            <h1>past projects</h1>
            <CardGroup>
                {cards.map((project: ProjectInfo) => {
                    return <Col xs={4}><ProjectCard 
                    title={project.title}
                    technologies={project.technologies}
                    description={project.description}
                    link={project.link}
                    logo={project.logo}
                     />
                     </Col>
                })}
            </CardGroup>
        </Container>
    )
}

export default ProjectsPage