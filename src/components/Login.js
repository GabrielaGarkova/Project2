import {useState} from "react";
import {Button, Form, Modal, Row} from "react-bootstrap";

function Login() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Вход
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добре дошъл в твоя профил!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
              Регистрация
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Забравена парола
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Влез
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Login;