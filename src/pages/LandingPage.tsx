import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { Fade } from "react-awesome-reveal";
import '../css/LandingPage.css';


function LandingPage() {
    return (
        <div className='LandingPage'>
            <Header text="01. about" />
        <Container className='LandingPage-App'>
            <Fade delay={0}>
        <Card className="LandingPage-Card">
                <Card.Img className="LandingPage-Picture" variant="bot" src={require(`../assets/IMG_4727.jpeg`)} />
                <Card.Body className="LandingPage-Body">
                    <Card.Title>Welcome to my page</Card.Title>
                    <Card.Subtitle>
                    </Card.Subtitle>
                    <Card.Text className="LandingPage-Text">
                    I'm a new grad from the University of Toronto with experience in cloud, full stack, and android development. 
        I have experience in building features end to end in early start ups to big corporations, and love working with people, code, and everything in between.
                    </Card.Text>
                    <Button className="buttons">
                        <a className="link" href="https://docs.google.com/document/d/1Gpak5AE4VqKmAzvoWtLt0QjBKX2eOfzj/edit?usp=sharing&ouid=102558947000491739964&rtpof=true&sd=true">
                            Get Resume
                        </a>
                    </Button>
                </Card.Body>
            </Card>
            </Fade>
        </Container>
        </div>
    )
}

export default LandingPage;
