import {Card, Carousel} from "react-bootstrap";

function Landmarks() {
    return (
        <div>
        <Card className="d-flex justify-content-around p-3">
             <Card.Body className="text-center">
                <Card.Title> <h2>ТОП ЗАБЕЛЕЖИТЕЛНОСТИ В БЪЛГАРИЯ</h2> </Card.Title>  
             </Card.Body>
        </Card>

        <div className="d-flex justify-content-around p-5">
        
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/istock-604018442.jpg?itok=aYV69eOO/100px180" />
            <Card.Body>
            <Card.Title>Меандрите на р. Арда </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/istock-607615458.jpg?itok=8E9xi382/100px180" />
            <Card.Body>
            <Card.Title>Резерват Ропотамо </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/istock-532345758.jpg?itok=ESCsIi3c/100px180" />
            <Card.Body>
            <Card.Title>Рудник "Цар Асен" </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/istock-479305282.jpg?itok=z81VQYkd/100px180" />
            <Card.Body>
            <Card.Title>Седемте Рилски езера </Card.Title>
            </Card.Body>
        </Card>

       </div>
       <div className="d-flex justify-content-around p-5">
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gettyimages-452197189.jpg?itok=1wL4waLu/100px180" />
            <Card.Body>
            <Card.Title>Бегликташ </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_371233756.jpg?itok=shJmx2PP/100px180" />
            <Card.Body>
            <Card.Title> Перперикон </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_313073390_0_0.jpg?itok=YuVQTeG9/100px180" />
            <Card.Body>
            <Card.Title> Деветашка пещера </Card.Title>
            </Card.Body>
        </Card>
    
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_343854737.jpg?itok=otPCU5ag/100px180" />
            <Card.Body>
            <Card.Title> Белоградчишките скали </Card.Title>
            </Card.Body>
        </Card>
        </div>

        <div className="d-flex justify-content-around p-5">

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/275140623_10160029934443586_843545184669661700_n.jpg?itok=VTqxN2tx/100px180" />
            <Card.Body>
            <Card.Title> Млечният път над Царевец </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/275120989_10160029754703586_4090497207750607944_n.jpg?itok=mTiHWpoG/100px180" />
            <Card.Body>
            <Card.Title>Самотното дърво. Родопа </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/istock-184661099.jpg?itok=7F_ExO7k/100px180" />
            <Card.Body>
            <Card.Title>Мелнишки пирамиди </Card.Title>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_91679669_0_0.jpg?itok=V6VKwoV1/100px180" />
            <Card.Body>
            <Card.Title>Стобски пирамиди в Рила </Card.Title>
            </Card.Body>
        </Card>
        
        </div>
        </div>
    );
}

export default Landmarks;