import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCarouselComponent = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            src="images/carousel/image1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to="/product-details" style={{cursor:'pointer', color: 'white', textDecoration: 'none' }}>
              <h3>BestSeller in Laptops Category</h3>
              <p>Dell Inspiron 15 3000 Laptop</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            src="images/carousel/image2.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Link to="/product-details" style={{cursor:'pointer', color: 'white', textDecoration: 'none' }}>
              <h3>BestSeller in Books Category</h3>
              <p>Dell Inspiron 15 3000 Laptop</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            src="images/carousel/image3.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Link to="/product-details" style={{cursor:'pointer', color: 'white', textDecoration: 'none' }}>
              <h3>BestSeller in Camera Category</h3>
              <p>Dell Inspiron 15 3000 Laptop</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProductCarouselComponent;
