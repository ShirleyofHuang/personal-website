import { Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import '../css/Contact.css'

const ContactPage = () => {
    return (
        <div>
            <Header text="04. contact me" />
            <Container className="ContactPage-Container">
                <Row>
                <div className="ContactPage-email">
                    <h1>say hi</h1>
                    <br />
                    <h1><a href="mailto:shirley.huang2000@outlook.com" className="hover-2">@shirley.huang</a></h1>
                </div>
                </Row>

            </Container>
        </div>
    )
}

export default ContactPage