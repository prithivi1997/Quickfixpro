import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent laptop repair service! Fixed my Dell laptop screen in just 2 hours. Very professional and affordable pricing.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    rating: 5,
    comment: "They installed my home projector perfectly. The technician was knowledgeable and explained everything clearly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Sharma",
    rating: 5,
    comment: "Best desktop upgrade service in Bhubaneswar! They upgraded my RAM and SSD, now my PC runs like new. Great work!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Sneha Mishra",
    rating: 4,
    comment: "Quick and reliable TV installation service. They mounted my 55-inch TV on the wall perfectly. Will definitely use again.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Aditya Singh",
    rating: 5,
    comment: "Professional chimney cleaning service! They arrived on time and did a thorough job. My kitchen is much cleaner now.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const UserReviews = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        What Our Customers Say 💬
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        className="p-6"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-gradient-to-r from-purple-50 to-blue-50 shadow-xl p-8 rounded-2xl text-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full border-4 border-purple-300 mb-4"
              />
              <p className="text-lg text-gray-700 italic mb-4">"{review.comment}"</p>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">★</span>
                ))}
              </div>
              <p className="text-lg font-semibold text-gray-900">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserReviews;