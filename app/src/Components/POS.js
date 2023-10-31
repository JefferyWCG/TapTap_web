import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import picture from "../media/POS System Flex.png"
import emptyImg from "../media/Empty.png"

export default function POS() {
    return(
        <>
            <div style={{"padding-top" : "150px"}}/>
            <div style={{"textAlign" : "center"}}>
                <h1><b>POS System</b></h1>
                <h3>Our smart register is still in the making, here's what we have so far</h3>
            </div>
            <br/>
            <Container style={{"padding-top" : "150px", "float" : "center"}} fluid>
                <Row>
                    <Col xs={5} style={{"padding" : "100px 0px 0px 200px"}}>
                        <Carousel variant='dark'>
                            <Carousel.Item>
                                <img src={emptyImg}/>
                                <Carousel.Caption className='d-flex flex-column justify-content-center' style={{"top" : "0"}}>
                                    <h3><b>Table Layout</b></h3>
                                    <p>You'll never miss a table's order with our colors indicating table status. Customize the layout to look like your restaurant.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={emptyImg}/>
                                <Carousel.Caption className='d-flex flex-column justify-content-center' style={{"top" : "0"}}>
                                    <h3><b>Table Layout</b></h3>
                                    <p>You'll never miss a table's order with our colors indicating table status. Customize the layout to look like your restaurant.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={emptyImg}/>
                                <Carousel.Caption className='d-flex flex-column justify-content-center' style={{"top" : "0"}}>
                                    <h3><b>Table Layout</b></h3>
                                    <p>You'll never miss a table's order with our colors indicating table status. Customize the layout to look like your restaurant.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={emptyImg}/>
                                <Carousel.Caption className='d-flex flex-column justify-content-center' style={{"top" : "0"}}>
                                    <h3><b>Table Layout</b></h3>
                                    <p>You'll never miss a table's order with our colors indicating table status. Customize the layout to look like your restaurant.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                    <Col xs={6} style={{"padding" : "0px 5% 0px 10%", "display": "flex", "justify-content": "center", "align-items": "center"}}><img src={picture} width="100%" alt='iPad'/></Col>
                </Row>
            </Container>
        </>
    )
}