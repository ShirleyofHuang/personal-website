import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import WorkContainer from "../components/WorkContainer";
import { WorkInfo } from "../types/WorkType";

const work_experience = [
    {
        company: "General Motors",
        work_title: "Android Software Engineer",
        technologies: ["Kotlin", "Jenkins"],
        description: "lalala",
        logo: ""
    },
    {
        company: "Mark43",
        work_title: "Full Stack Software Engineer",
        technologies: ["Kotlin", "Jenkins"],
        description: "lalala",
        logo: ""
    },
    {
        company: "State Street",
        work_title: "Cloud Software Engineer",
        technologies: ["Kotlin", "Jenkins"],
        description: "lalala",
        logo: ""
    },
    {
        company: "Tudu Toronto",
        work_title: "Full Stack Software Developer",
        technologies: ["Kotlin", "Jenkins"],
        description: "lalala",
        logo: ""
    },
]
const WorkPage = () => {
    return (
        <Container className="ProjectsPage-Container">
            <h1>work experience</h1>
            <CardGroup>
                {work_experience.map((work: WorkInfo) => {
                    return <Col xs={12}>
                    <WorkContainer
                        company={work.company}
                        work_title={work.work_title}
                        technologies={work.technologies}
                        description={work.description}
                        logo={work.logo}
                        />
                    </Col>
                })}
            </CardGroup>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkPage