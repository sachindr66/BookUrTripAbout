import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import "../styles/testimonial.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Allan Collins",
    role: "Frequent Flyer",
    img: "https://i.pravatar.cc/60?img=1",
    headline: "Love the simplicity",
    text: "BookUrTrip made booking my Mumbai-Delhi flights incredibly simple! The seat selection process was smooth, and the instant confirmations gave me peace of mind. Highly recommended!",
    rating: 5
  },
  {
    name: "Tanya Grant",
    role: "Business Traveler",
    img: "https://i.pravatar.cc/60?img=2",
    headline: "Excellent Service",
    text: "As a business traveler, I need reliability and speed. BookUrTrip consistently delivers excellent service with competitive prices and instant seat confirmations.",
    rating: 5
  },
  {
    name: "Clay Washington",
    role: "Train Commuter",
    img: "https://i.pravatar.cc/60?img=3",
    headline: "Efficient and Reliable",
    text: "My daily Bangalore-Chennai train bookings are now hassle-free! Their seat availability updates are always accurate and the booking process is lightning fast.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Luxury Traveler",
    img: "https://i.pravatar.cc/60?img=4",
    headline: "Premium Experience",
    text: "BookUrTrip helped me secure premium seats for my Pune-Goa luxury bus journey. The booking process was smooth and the service was exceptional.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Student Traveler",
    img: "https://i.pravatar.cc/60?img=5",
    headline: "Perfect for Students",
    text: "Found the best deals on Delhi-Agra cab bookings within my budget! The seat confirmation was instant and the prices were unbeatable.",
    rating: 4
  },
  {
    name: "Rajesh Kumar",
    role: "Family Traveler",
    img: "https://i.pravatar.cc/60?img=6",
    headline: "Family-Friendly",
    text: "Booking 4 seats for our family trip was incredibly simple! BookUrTrip found us the best prices and confirmed all seats together seamlessly.",
    rating: 5
  }
];

export default function TestimonialSlider() {
  return (
    <div className="testimonial-section">
      <h2 className="heading">What our customers say</h2>

      <div className="testimonial-slider-container">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="testimonial-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="quote-corner">
                  <FaQuoteLeft />
                </div>
                <div className="card-content">
                  <h3 className="testimonial-headline">{testimonial.headline}</h3>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="card-footer">
                    <div className="author-info">
                      <img src={testimonial.img} alt={testimonial.name} className="profile-img" />
                      <div className="author-details">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Navigation */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          </div>
          <div className="swiper-button-next slider-arrow">
          </div>
        </div>

        {/* Pagination dots below the slider */}
        {/* <div className="swiper-pagination"></div> */}
      </div>
    </div>
  );
}
