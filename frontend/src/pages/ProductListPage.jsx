import { Container,Row,Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import PaginationComponent from "../components/PaginationComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import SortOptionsComponent from "../components/SortOptionsComponent";
import PriceFilterComponent from "../components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent";
import AttributeFilterComponent from "../components/filterQueryResultOptions/AttributeFilterComponent";
const ProductListPage=()=>{
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item><SortOptionsComponent/></ListGroup.Item>
                    <ListGroup.Item><PriceFilterComponent/></ListGroup.Item>
                    <ListGroup.Item><RatingFilterComponent/></ListGroup.Item>
                    <ListGroup.Item><CategoryFilterComponent/></ListGroup.Item>
                    <ListGroup.Item><AttributeFilterComponent/></ListGroup.Item>
                 </ListGroup>
                 <button type="button" class="btn btn-primary">Primary</button>
                 <button type="button" class="btn btn-danger">Danger</button>
                </Col>
                <Col md={9}>
                <ProductForListComponent/>
                <PaginationComponent/>
                </Col>
            </Row>
        </Container>
    )
}
export default ProductListPage;