import React from 'react';
import { Rating } from 'react-simple-star-rating';
import Form from 'react-bootstrap/Form';

const RatingFilterComponent = () => {
  return (
    <>
      <p>Filter by Rating</p>
      {Array.from({ length: 5 }).map((_, idx) => {
        const ratingValue = 5 - idx; // To show 5 stars at top, 1 at bottom
        return (
          <div key={ratingValue} className="d-flex align-items-center mb-2">
            <Form.Check type="checkbox" id={`rating-${ratingValue}`} />
           
            <Rating
              readonly
              size={20}
              initialValue={ratingValue}
              allowFraction={false}
              style={{ marginLeft: '10px' }}
            />
          </div>
        );
      })}
    </>
  );
};

export default RatingFilterComponent;
