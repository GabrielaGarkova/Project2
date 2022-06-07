import {Form, Card, Button, Col, Row, Carousel} from "react-bootstrap";

function Contacts() {
    return (
        <>
         <Carousel>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src="http://blog.nastanise.com/wp-content/uploads/2015/07/bulgaria.jpg"
                />
            </Carousel.Item>
        </Carousel>  

         <Row className="mt-5 p-5">
             <Col>
                <Card className = "d-block mx-auto w-100">
                    <Card.Body>
                        <Card.Title className="text-center"> <h2>СВЪРЖЕТЕ СЕ С НАС</h2> </Card.Title>
                        <Card.Text>
                            <h3 className="fw-normal">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="name" placeholder="Име" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Имейл" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="message" placeholder="Съобщение" />
                                    </Form.Group>
                                </Form>
                            </h3>                
                            <Button variant="warning">Изпращане</Button>{' '}
                        </Card.Text>  
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className = "d-block mx-auto w-100">
                    <Card.Body>
                        <Card.Title> 
                        <Card.Title className="text-center">  <h2>ДЕТАЙЛИ ЗА КОНТАКТ</h2> </Card.Title>
                        </Card.Title>
                        <Card.Text>
                            <h3 className="fw-normal">                        
                                <div className=" mt-4 mb-3">Адрес: град Пловдив жк Тракия</div>
                                <div className="mb-3">Тел: 0899556686</div>          
                                <div className="mb-3">e-mail: vacantion_choice@abv.bg</div>  
                            </h3>
                        </Card.Text>  
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
    );
}

export default Contacts;