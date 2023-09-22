import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import '../css/TravelContainer.css'
import Carousel from 'react-bootstrap/Carousel';
import { CountryInfo } from '../types/CountryType';

const TravelContainer = ({country, cities, pictures}: CountryInfo) => {
    return (
        <div>
            <Header text={country} />

            <Container className="TravelContainer-Container">
                <Row className="TravelContainer-Row">
                    <Col xs={4} className="TravelContainer-Info">
                        <h1>{cities.join(" - ")}</h1>
                    </Col>
                    <Col xs={8}>
                    <Container className="TravelContainer-ImageContainer">

                        <Carousel interval={null} fade={true} className="TravelContainer-Image">

                        {pictures.map((_picture: string | null) => {
                            return <Carousel.Item className="TravelContainer-ImageFill">
                                <div className="Carousel-Contain">
                                <img
                                className="d-block"
                                src={require(`../assets/travel/${_picture}`)}
                                alt="First slide"
                                />
                                </div>
                            </Carousel.Item>

                        })} 

                        </Carousel>
                        </Container>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default TravelContainer