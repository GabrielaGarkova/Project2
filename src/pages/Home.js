import { Carousel, Card } from "react-bootstrap";

function Home() {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-90"
                    src="https://www.aldi.pics/img/bulgaria/IMG_11463.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-90"
                    src="https://www.aldi.pics/img/bulgaria/DSE_22928.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-90"
                    src="https://www.aldi.pics/img/bulgaria/DSE_33539.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>  

        <Card>
                <Card.Body className="text-center mt-2 p-3">
                    <Card.Title> <h2>ЗA НАС</h2> </Card.Title>
                    <Card.Text>
                        <h4 className="fw-normal">
                        Ние сме мястото, на което можете да откриете точно това, което търсите. 
                        Ние от VacantionChoice ви предлагаме страхотни предложения за вашето спокойствие
                        независимо дали отсядате по работа, за почивка или просто търсите забавление и 
                        релакс далече от ежедневието на XXI век.
                        Нека бъдем част от вашия избор и осъществим  вашият комфорт.
                        </h4>
                    </Card.Text>  
                </Card.Body>
        </Card>
    </>     
  );
}

export default Home;