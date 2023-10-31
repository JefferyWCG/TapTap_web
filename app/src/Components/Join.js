import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

export default function Join() {
    return(
        <>
            <div style={{"padding-top" : "150px"}}/>
            <h1 style={{"textAlign" : "center", "marginBottom" : "30px"}}><b>Are you a restaurant owner? Join us today!</b></h1>
            <Container style={{"borderRadius" : "15px", "boxShadow" : "0px 0px 20px 0px lightgray", "width" : "45%", "padding" : "50px"}}>
                <Form>
                    <h5><b>Fill out this form to get in contact with us</b></h5>
                    <br/>
                    <Form.Group> 
                        <Row>
                            <Col><Form.Control type="text" placeholder="First Name" /></Col>
                            <Col><Form.Control type="text" placeholder="Last Name" /></Col>
                        </Row>
                    </Form.Group>
                    <br/>
                    <Form.Group> 
                        <Form.Control type="email" placeholder="Email" /> 
                    </Form.Group> 
                    <br/>
                    <Form.Group> 
                        <Form.Control type="phone" placeholder="Phone Number" /> 
                    </Form.Group>
                    <br/>
                    <Form.Group> 
                        <Form.Control type="phone" placeholder="Restaurant Name" /> 
                    </Form.Group>
                    <br/>
                    <Form.Group> 
                        <Form.Control type="phone" placeholder="POS System" /> 
                    </Form.Group> 
                    <br/>
                    <Button variant="danger" type="submit" style={{"width" : "100%"}}> 
                        Get a Demo
                    </Button>
                    <br/>
                    <br/>
                    <Form.Group style={{"textAlign" : "center", "fontSize" : "12px"}}>
                        <Form.Label>Already a TechCafe user? Login <span><a>Here</a></span></Form.Label>
                        <br/>
                        <Form.Label>By requesting a demo, you agree to receive automated text messages from TechCafe. We'll handle your info according to our privacy statement.</Form.Label>
                    </Form.Group>
                </Form> 
            </Container>
        </>
    )
}