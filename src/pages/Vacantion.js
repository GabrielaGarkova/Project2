import {Card, Form, Button, Placeholder, Col, Row, Container, Stack } from "react-bootstrap";

function Vacation() {
    return (
      <>
        <div className="Vacantion mt-2 p-5">
          <Container>
              <Row>
                <Col sm={3}>
                <Stack direction="horizontal" gap={3}>
                  <Form.Control className="me-auto" placeholder="Изберете дестинация..." />
                  <div className="vr" />
                </Stack>
              </Col>
              <Col sm={3}>
                <Form.Select aria-label="Изберете дестинация">
                  <option>Цена</option>
                  <option value="Elenite">От 30 До 80</option>
                  <option value="Plovdiv">От 81 До 120</option>
                  <option value="Pamporovo">От 121</option>
                </Form.Select>
              </Col>
              <Col sm={3}>
                <Form.Select aria-label="Изберете дестинация">
                  <option>Стаи</option>
                  <option value="Elenite">Единична</option>
                  <option value="Plovdiv">Двойна</option>
                  <option value="Pamporovo">Тройна</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="warning">Търсене</Button>
              </Col>
            </Row>

            <Row className="mt-2 text-center p-4">
              <h5>Филтриране по:</h5>
                <Col sm={3}>
                  <Form.Select aria-label="Тип настаняване">
                    <option>Тип настаняване</option>
                    <option value="Elenite">Хотел</option>
                    <option value="Plovdiv">Къща за гости</option>
                    <option value="Pamporovo">Апартамент</option>
                  </Form.Select>
              </Col>
              <Col sm={3}>
                <Form.Select aria-label="Изберете дестинация">
                  <option>Оценка</option>
                  <option value="Elenite">Отличен</option>
                  <option value="Plovdiv">Много добър</option>
                  <option value="Pamporovo">Добър</option>
                  <option value="Pamporovo">Приемлив</option>
                </Form.Select>
              </Col>
              <Col sm={3}>
                <Form.Select aria-label="Изберете дестинация">
                  <option>Категория на хотела</option>
                  <option value="5">5 звезди</option>
                  <option value="4">4 звезди</option>
                  <option value="3">3 звезди</option>
                  <option value="2">2 звезди</option>
                </Form.Select>
              </Col>
              <Col sm={3}>
                <Form.Select aria-label="Изберете дестинация">
                  <option>Забележителности</option>
                  <option value="5">Дяволски мост</option>
                  <option value="4">Седемте Рилски Езера</option>
                  <option value="3">Перперикон</option>
                  <option value="2">Резерват Ропотамо</option>
                </Form.Select>
              </Col>
            </Row>
          </Container>
          
          <Card className="d-flex justify-content-around p-3">
             <Card.Body className="text-center">
                <Card.Title> <h2>Всички резултати:</h2> </Card.Title>  
             </Card.Body>
        </Card>

        <div className="d-flex justify-content-around p-4"> 
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/302085828.jpg?k=62ba67c1279e1e5beb64e605d3bb4fcd85fd2f75ec11fcf3d3526bc9097e1619&o=&hp=1/100px180" />
      <Card.Body>
      <Card.Title>
        Royal Castle Design and SPA
        <div>
          ☆☆☆☆☆
        </div>
        </Card.Title>
      <Card.Text>Тип: Хотел</Card.Text>
      <Card.Text>Местоположение: Елените</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/340190977.jpg?k=6bc5fde4c02258fa94a1fdc69a3f99577f871c248605e1413292d75be4e06dd6&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Villas Elenite 
        <div>
          ☆☆☆☆
        </div>
        </Card.Title>
      <Card.Text>Тип: Апартамент</Card.Text>
      <Card.Text>Местоположение: Елените</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/100605810.jpg?k=14db6cf5cf1ef1e36e636e305906012fd488ff0f60ab6a5acde9bfa9fd248b9b&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Royal Bay Hotel 
        <div>
          ☆☆☆☆
        </div>
        </Card.Title>
        <Card.Text>Тип: Хотел</Card.Text>
      <Card.Text>Местоположение: Елените</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card>
      </div>
      
      <div className="d-flex justify-content-around p-4">  
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/40778632.jpg?k=a385de720bd1fce29476c72bba07d446a483a2142c59d5b9280984059e435d5d&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Grand hotel Velingrad
        <div>
          ☆☆☆☆☆
        </div>
        </Card.Title>
        <Card.Text>Тип: Хотел</Card.Text>
      <Card.Text>Местоположение: Велинград</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/125701080.jpg?k=63be3202069aa0fac8066e4bee5b73430843d5b764bd6a809362ade426241a41&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Hotel Arte SPA
        <div>
          ☆☆☆☆☆
        </div>
        </Card.Title>
        <Card.Text>Тип: Хотел</Card.Text>
        <Card.Text>Местоположение: Велинград</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card> 
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/135882033.jpg?k=48d8a3d1ce6f67b9570523a8595dc0c9962d8a34c0d5ca4dc96dfa3c4f9b33f3&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Hotel Perelik
        <div>
          ☆☆☆☆☆
        </div>
        </Card.Title>
        <Card.Text>Тип: Хотел</Card.Text>
        <Card.Text>Местоположение: Пампорово</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card>
      </div>

      <div className="d-flex justify-content-around p-4">  
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/105481189.jpg?k=b29553ee7c33002a1e59acc123b5fa6ae8929dccecfac1e99dd0b1c408ade6b8&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Park hotel Izvora
        <div>
          ☆☆☆
        </div>
        </Card.Title>
        <Card.Text>Тип: Хотел</Card.Text>
      <Card.Text>Местоположение: Котел</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/77789572.jpg?k=fc2ee13ed2782bf89aedb3ccf7870fc479ec3d93c28ee52e0d7887c7ea95488f&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Hotel Perperikon
        <div>
          ☆☆☆
        </div>
        </Card.Title>
        <Card.Text>Тип: Хотел</Card.Text>
        <Card.Text>Местоположение: Кърджали</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card> 

      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/114127396.jpg?k=0c49916e339dba9b7e6edfb1dd740e9e118fdec08c7d630f4cfe4c76af50dda1&o=&hp=1/100px180" />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
      </Placeholder>
      <Card.Title> 
        Guest House Holiday in Melnik
        <div>
          ☆☆
        </div>
        </Card.Title>
        <Card.Text>Тип: Къща за гости</Card.Text>
        <Card.Text>Местоположение: Мелник</Card.Text>
      <Button variant="primary">Показване на цени</Button>
      </Card.Body>
      </Card>

      </div>
      </div>
      </>

    )
}

export default Vacation;