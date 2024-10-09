import React, { useState } from 'react';
import "./Testimonials.css";
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <section className="testimonials container section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonials__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        // autoplay={autoplay ? { delay: 13000, disableOnInteraction: false } : false}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {Data.map(({ id, image, title, description, verifyLink }) => {
          const [isExpanded, setIsExpanded] = useState(false);

          const lineLimit = 3;
          const lineHeight = 20;
          const maxHeight = lineLimit * lineHeight;

          const handleViewMore = () => {
            setIsExpanded(true);
            setAutoplay(false);
          };

          const handleViewLess = () => {
            setIsExpanded(false);
            setAutoplay(true);
          };

          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <div className="testimonial__header">
                <img src={image} alt="" className='testimonial__img' />
                <a
                  href={verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial__verify"
                >
                  Verify
                </a>
              </div>
              <h3 className="testimonial__name">{title}</h3>
              <p
                className={`testimonial__description ${isExpanded ? 'expanded' : ''}`}
                style={{
                  maxHeight: isExpanded ? 'none' : `${maxHeight}px`,
                }}
              >
                {description}
                {!isExpanded && description.length > 100 && '...'}
              </p>
              {!isExpanded && description.length > 100 && (
                <button className="view-more" onClick={handleViewMore}>
                  View More
                </button>
              )}
              {isExpanded && (
                <button className="view-more" onClick={handleViewLess}>
                  View Less
                </button>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
