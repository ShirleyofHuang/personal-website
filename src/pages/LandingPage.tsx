import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/LandingPage.css';


function LandingPage() {
    return (
        <div className='LandingPage'>
        <Container className='LandingPage-App'>
            <Row className="LandingPage-Row">
                <Col>
                    <Card
                    className="LandingPage-Card"
                    >
                    <Card.Body>
                        <h2>
                            About Me
                        </h2>
                        <p>I'm a new grad from UofT with experience in cloud, full stack, and android development. 
                        I have experience in building features end to end in early start ups to big corporations, and love working with people, code, and everything in between.
                        </p>
                        <Button className="buttons">
                            <a className="links" href="https://docs.google.com/document/d/1Gpak5AE4VqKmAzvoWtLt0QjBKX2eOfzj/edit?usp=sharing&ouid=102558947000491739964&rtpof=true&sd=true">
                                Get Resume
                            </a>
                        </Button>
                    </Card.Body>

                </Card>
                </Col>

            </Row>
        </Container>
        </div>
    )
}

export default LandingPage;