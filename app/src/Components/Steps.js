import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import picture from "../media/logo.png"

export default function Steps() {
    return(
        <>
            <div style={{"padding-top" : "150px"}}/>
            <h1 style={{"text-align" : "center", "marginBottom" : "50px"}}><b>How Our Tech Works</b></h1>
            <Container fluid style={{"width" : "70%"}}>
                <Row>
                    <Col style={{"justify-content": "center"}} className="gap-0">
                        <h3 style={{"textAlign" : "center", "marginBottom" : "20px"}}><b>Step 1</b></h3>
                        <Card style={{ "width": 'auto', "height" : "90%", "borderRadius" : "15px" }}>
                            <Container style={{"padding" : "12px"}}>
                                <Card.Img variant="top" src={picture} style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "padding" : "10px", "backgroundColor" : "red", "borderRadius" : "15px"}}/>
                            </Container>
                            <Card.Body>
                                <Card.Text>
                                Customers scan an NFC tag and order food through an online menu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{"justify-content": "center"}} className="gap-0">
                        <h3 style={{"textAlign" : "center", "marginBottom" : "20px"}}><b>Step 2</b></h3>
                        <Card style={{ "width": 'auto', "height" : "90%", "borderRadius" : "15px" }}>
                            <Container style={{"padding" : "12px"}}>
                                <Card.Img variant="top" src={picture} style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "padding" : "10px", "backgroundColor" : "red", "borderRadius" : "15px"}}/>
                            </Container>
                            <Card.Body>
                                <Card.Text>
                                    Handle all their orders through your POS tablet screen
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{"justify-content": "center"}} className="gap-0">
                        <h3 style={{"textAlign" : "center", "marginBottom" : "20px"}}><b>Step 3</b></h3>
                        <Card style={{ "width": 'auto', "height" : "90%", "borderRadius" : "15px" }}>
                            <Container style={{"padding" : "12px"}}>
                                <Card.Img variant="top" src={picture} style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "padding" : "10px", "backgroundColor" : "red", "borderRadius" : "15px"}}/>
                            </Container>
                            <Card.Body>
                                <Card.Text>
                                    Your customers pay for their food, online or in-person
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}