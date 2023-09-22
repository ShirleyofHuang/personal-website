import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../css/HeaderContainer.css';


const Header = ({ text }: { text: string }) => {
    return (
        <Container className="Header-Container">
            <Row><h2>･ﾟﾟ･｡｡･ﾟﾟ･ {text} ･ﾟﾟ･｡｡･ﾟﾟ･</h2></Row>
        </Container>
    )
}

export default Header;