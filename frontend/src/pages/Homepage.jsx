import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardConponent from "../components/CategoryCardConponent";
import { Row,Container } from "react-bootstrap";
const Homepage = () => {
    const categories = [
        "Tablets",
        "Monitors",
        "Games",
        "Printers",
        "Software",
        "Cameras",
        "Books",
        "Videos"
    ];

    return (
        <>
            <ProductCarouselComponent />
            <Container>
            <Row xs={1} md={2} className="g-4 mt-5">
            {categories.map((category, index) => (
                <CategoryCardConponent category={category}index ={index} key={index} />
            ))}
            </Row>
            </Container>
        </>
    );
};

export default Homepage;
