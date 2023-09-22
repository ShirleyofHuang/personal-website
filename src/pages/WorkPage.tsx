import React, { useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import WorkContainer from "../components/WorkContainer";
import { WorkInfo } from "../types/WorkType";
import Header from "../components/Header";
import { useParallax } from "react-scroll-parallax";
import '../css/WorkPage.css';

const work_experience = [
    {
        company: "General Motors",
        work_title: "Android Software Engineer",
        dates: "Sept - Dec 2022",
        technologies: ["Kotlin", "Jenkins"],
        description: "I was part of the Radio team for the GM's infotainment system (dashboard on the car). I mainly worked on setting up the CI/CD on Jenkins to run unit tests automatically with every push. I had the infotainment hardware and it made me feel so cool. ",
        logo: "gm.webp"
    },
    {
        company: "Mark43",
        work_title: "Full Stack Software Engineer",
        dates: "June - Aug 2022",
        technologies: ["Kotlin", "Jenkins"],
        description: "Mark43 is a NYC based company focused in the public safety sector. Joined the Rebel Compliance team where I worked on setting up the Warrants dashboard, creating a new timeline page for police officers to use to track warrants.",
        logo: "m43.jpeg"
    },
    {
        company: "State Street",
        work_title: "Cloud Software Engineer",
        dates: "May - Dec 2021",
        technologies: ["Kotlin", "Jenkins"],
        description: "I worked on the cloud infrastructure of the company and learnt a lot about AWS mainly. I spent most of my time writing python lambdas and integrating in AWS's systems such as IAMs, Cloudwatch, and SNS.",
        logo: "statestreet.jpeg"
    },
    {
        company: "Tudu Toronto",
        work_title: "Full Stack Software Developer",
        technologies: ["Kotlin", "Jenkins"],
        dates: "May - Aug 2020",
        description: "Tudu Toronto is no longer active but this was my first internship and where I learnt full stack development. I was creating any and all features end to end including OAuths, Billing features, and Photo uploading.",
        logo: "tudu.jpeg"
    },
]
const WorkPage = () => {
    const [index, setIndex] = useState(0);

    // const parallax = useParallax({
    //     rotate: [0, 360],
    //   });

    const out = useParallax({
        scaleX: [1.5, 0, "easeInQuad"],
    });

    const out_2 = useParallax({
        scaleX: [1.5, 0, "easeInQuad"],
    });

    const out_3 = useParallax({
        scaleX: [1.5, 0, "easeInQuad"],
    });

    const out_4 = useParallax({
        scaleX: [1.5, 0, "easeInQuad"],
    })

    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };
    return (

        <div>
             <Header text="02. work experience" />
             <Container className="WorkPage-Container">
             <div className="container-body">
                <div ref={out.ref as React.RefObject<HTMLDivElement>} className="spinner">
                    <WorkContainer 
                        company={work_experience[0].company}
                        work_title={work_experience[0].work_title}
                        technologies={work_experience[0].technologies}
                        dates={work_experience[0].dates}
                        description={work_experience[0].description}
                        logo={work_experience[0].logo}
                    />
                </div>
                <div ref={out_2.ref as React.RefObject<HTMLDivElement>} className="spinner">
                <WorkContainer 
                        company={work_experience[1].company}
                        work_title={work_experience[1].work_title}
                        technologies={work_experience[1].technologies}
                        dates={work_experience[1].dates}
                        description={work_experience[1].description}
                        logo={work_experience[1].logo}
                    />                </div>
                <div ref={out_3.ref as React.RefObject<HTMLDivElement>} className="spinner">
                <WorkContainer 
                        company={work_experience[2].company}
                        work_title={work_experience[2].work_title}
                        technologies={work_experience[2].technologies}
                        dates={work_experience[2].dates}
                        description={work_experience[2].description}
                        logo={work_experience[2].logo}
                    />    
                </div>
                <div ref={out_4.ref as React.RefObject<HTMLDivElement>} className="spinner">
                <WorkContainer 
                        company={work_experience[3].company}
                        work_title={work_experience[3].work_title}
                        technologies={work_experience[3].technologies}
                        dates={work_experience[3].dates}
                        description={work_experience[3].description}
                        logo={work_experience[3].logo}
                    />    
                </div>
            </div>
             </Container>
        </div>

        // <div className="WorkPage">
        //     <Header text="02. work experience" />
        // <Container className="WorkPage-Container">
        //     <CardGroup>
        //         {work_experience.map((work: WorkInfo) => {
        //             return <Col xs={12}>
        //             <WorkContainer
        //                 company={work.company}
        //                 dates={work.dates}
        //                 work_title={work.work_title}
        //                 technologies={work.technologies}
        //                 description={work.description}
        //                 logo={work.logo}
        //                 />
        //             </Col>
        //         })}
        //     </CardGroup>
        //     <Row>
        //         <Col>
        //         </Col>
        //     </Row>
        // </Container>
        // </div>
    )
}

export default WorkPage