import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import ProjectCard from "../components/Project";
import { ProjectInfo } from "../types/ProjectType";
import Header from "../components/Header";
// import LinkedinIcon from '../assets/svg/linkedin.svg'
import '../css/ProjectsPage.css';

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
        logo: "shirley_huang.png", 
        description: "My personal website you're currently on :)", 
        link: ""},
    {
        title: "QRency",
        technologies: ["React", "Django", "HTML/CSS"], 
        logo: "qrency.png",
        description: "ATM Hackathon project that won 1st place",
        link: "https://github.com/ShirleyofHuang/QRency"},
    {
        title: "Java Game",
        technologies: ["Java", "MVP", "NoSQL"],
        logo: "bossforest.png",
        description: "Android game made using Java", 
        link: "https://github.com/g0569/g0569"},
    {
        title: "Simon Says", 
        technologies: ["Verilog"], 
        logo: "simonsays.jpeg",
        description: "Verilog game", 
        link: "https://github.com/ShirleyofHuang/FPGA_SimonSays"}
]

const ProjectsPage = () => {
    return (
        <div>
            <Header text="03. selected projects" />
            <Container className="ProjectsPage-Container">
                <CardGroup>
                    {cards.map((project: ProjectInfo) => {
                        return <Col xs={12} md={4}><ProjectCard 
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
        </div>

    )
}

export default ProjectsPage