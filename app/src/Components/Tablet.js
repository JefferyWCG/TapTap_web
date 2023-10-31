import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import picture from '../media/iPad Mini.png'

export default function Tablet() {
    return(
        <>
            <Container style={{"padding-top" : "150px", "float" : "center"}} fluid>
                <Row>
                    <Col xs={6} style={{"padding" : "0px 5% 0px 10%", "display": "flex", "justify-content": "center", "align-items": "center"}}><img src={picture} width="100%" alt='iPad'/></Col>
                    <Col xs={5} style={{"padding" : "100px 0px 0px 200px"}}>
                        <h1 style={{"fontSize" : "56px"}}><b>Don't Have a Tablet?</b></h1>
                        <br />
                        <p style={{"fontSize" : "24px"}}>We got you covered.</p>
                        <br />
                        <b>Tablet Specs</b>
                        <br/>
                        <Row>
                            <Col>Price</Col>
                            <Col>$299</Col>
                        </Row>
                        <Row>
                            <Col>Size</Col>
                            <Col>25.9cm</Col>
                        </Row>
                        <Row>
                            <Col>Brand</Col>
                            <Col>Apple</Col>
                        </Row>
                        <Row>
                            <Col>Internal Storage</Col>
                            <Col>64GB</Col>
                        </Row>
                        <Row>
                            <Col>Network Type</Col>
                            <Col>Wi-Fi</Col>
                        </Row>
                        <br/>
                        <div>
                            <Button variant='danger'><b>Buy Now</b> <span>* Starting at $299</span></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}