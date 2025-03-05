import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from "../Reviews";
import SliderReviewContainer from "./style";

const ReviewsSlider = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderReviewContainer>
      <Slider {...settings}>
        {reviews.map((element, index) => (
          <Reviews text={element.text} author={element.author} key={index} />
        ))}
        </Slider>
    </SliderReviewContainer>
  );
};

export default ReviewsSlider;
