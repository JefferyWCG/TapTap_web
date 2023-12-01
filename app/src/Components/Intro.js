import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import picture from '../media/POS Mockup Register.png'

export default function Intro() {
    return(
        <>
            <Container style={{"padding-top" : "150px", "float" : "center"}} fluid>
                <Row>
                    <Col xs={5} style={{"padding" : "100px 0px 0px 200px"}}>
                        <h1 style={{"fontSize" : "56px"}}><b>{global.config.scriptMode === 1? "日本語": "order and pay for restaurants"}</b></h1>
                        <br />
                        <p style={{"fontSize" : "24px"}}>{global.config.scriptMode === 1? "japanchwiudhowhedw" : "Become more profitable by simplifying the restaurant experience for your customers." }</p>
                        <br />
                        <div>
                            <Button variant='danger'>Try the Demo</Button><span style={{"padding-left" : "20px"}}><Button variant='outline-secondary'>Contact Us</Button></span>
                        </div>
                    </Col>
                    <Col xs={6} style={{"padding" : "0px 5% 0px 10%", "display": "flex", "justify-content": "center", "align-items": "center"}}><img src={picture} width="100%" alt='iPad'/></Col>
                </Row>
            </Container>
        </>
    )
}