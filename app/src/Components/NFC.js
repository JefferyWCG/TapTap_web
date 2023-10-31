import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../media/Mobile Menu Gif 1.png'

export default function NFC() {
    return(
        <>
            <div style={{"padding-top" : "150px"}}/>
            <h1 style={{"textAlign" :'center'}}><b>NFC Mobile Menu</b></h1>
            <Container style={{"padding-top" : "70px", "float" : "center"}} fluid>
                <Row>
                    <Col xs={6} style={{"padding" : "0px 5% 0px 10%", "display": "flex", "justify-content": "center", "align-items": "center"}}><img src={picture} width="50%" alt='iPad'/></Col>
                    <Col xs={5} style={{"padding" : "100px 0px 0px 200px"}}>
                        <h1 style={{"fontSize" : "56px", "color" : "red"}}><b>Fast & Safe</b></h1>
                        <br />
                        <p style={{"fontSize" : "24px"}}>With just one tap, customers can order food through your online menu. With our NFC technology, you'll never have to worry about outsiders messing with your orders.</p>
                        <br />
                        <h1 style={{"fontSize" : "56px", "color" : "gray"}}><b>No App, All Web</b></h1>
                        <h1 style={{"fontSize" : "56px", "color" : "gray"}}><b>Custom Pay</b></h1>
                    </Col>
                </Row>
            </Container>

        </>
    )
}