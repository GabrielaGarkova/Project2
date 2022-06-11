import {Row, Container} from "react-bootstrap";
import HotelListItem from "../components/HotelListItem";
import {useGetHotel} from "../graphql/useRequest";
import {useParams} from "react-router-dom";

function Vacation() {
    const {id} = useParams();
    const {data, error, isLoading, isSuccess} = useGetHotel(id);
    debugger
    return (
        <>
            <Container>
                <Row>
                    {data && <HotelListItem hotel={data.hotel}/>}
                </Row>
            </Container>
        </>

    )
}

export default Vacation;