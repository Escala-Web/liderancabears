import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewsContainer from "./style";

const Reviews = () => {
  const reviews = [
    { id: 1, text: "Ótimo produto!", author: "João Silva" },
    { id: 2, text: "Muito satisfeito com a compra.", author: "Maria Oliveira" },
    { id: 3, text: "Recomendo para todos!", author: "Carlos Souza" },
  ];

  return (
    <ReviewsContainer>
      <h2 className="title">O que nossos clientes dizem</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="slider">
            <div className="review-card">
              <p className="review-text">“{review.text}”</p>
              <p className="review-author">- {review.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ReviewsContainer>
  );
};

export default Reviews;
