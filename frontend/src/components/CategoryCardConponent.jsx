import React from 'react'
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CategoryCardConponent = ({category,index}) => {
    const images=[
        "images/carousel/tablet.jpg",
        "images/carousel/image2.webp",
        "images/carousel/tablet.jpg",
        "images/carousel/tablet.jpg",
        "images/carousel/tablet.jpg",
        "images/carousel/tablet.jpg",
        "images/carousel/tablet.jpg",
        "images/carousel/tablet.jpg"

    ];
  return (
    <Card >
      <Card.Img variant="top" src={images[index]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/product-list">
        <Button variant="primary">Go to category</Button>
        </Link>
       
      </Card.Body>
    </Card>
  )
}

export default CategoryCardConponent
