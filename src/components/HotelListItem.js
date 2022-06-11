import {Card, Button, Placeholder, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function HotelListItem({hotel}) {

    const getStars = () => {
        return [...Array(Number(hotel.star)).keys()].map(value => {
            return <span key={value}>☆</span>
        })
    }
    return (
        <Col md={3}>
            <Card className="my-2">
                <Card.Img variant="top" src={hotel.image}/>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                    </Placeholder>
                    <Link to={`/hotel/${hotel._id}`}>
                        <Card.Title>
                            {hotel.name}
                            <div>
                                {getStars()}
                            </div>
                        </Card.Title>
                    </Link>

                    <Card.Text>Тип: {hotel.type}</Card.Text>
                    <Card.Text>Местоположение: {hotel.city}</Card.Text>
                    <Button variant="primary">Показване на цени</Button>
                </Card.Body>
            </Card>
        </Col>


    )
}

export default HotelListItem;