import {Card, Form, Button, Placeholder, Col, Row, Container, Stack} from "react-bootstrap";
import HotelListItem from "../components/HotelListItem";
import {useGetHotels} from "../graphql/useRequest";

function Vacation() {

    const {data, error, isLoading, isSuccess} = useGetHotels();

    const renderHotels = () => {

        if (data?.hotels) {
            return data.hotels.map(hotel => {
                return <HotelListItem
                    key={hotel._id}
                    hotel={hotel}
                />
            })
        }
        return null;

    }


    return (
        <>
            <div className="Vacantion mt-2 p-5">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Control className="me-auto" placeholder="Изберете дестинация..."/>
                                <div className="vr"/>
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
                        <Card.Title><h2>Всички резултати:</h2></Card.Title>
                    </Card.Body>
                </Card>
                <Container>
                    <Row>
                        {renderHotels()}
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default Vacation;