import React from 'react';
import ReviewsContainer from './style';

const Reviews = ({text, author, key})=>{
    return (
        <ReviewsContainer key={key}>
            <p>{text}</p>

            <p className='author'>{author}</p>
        </ReviewsContainer>
    );
}

export default Reviews;