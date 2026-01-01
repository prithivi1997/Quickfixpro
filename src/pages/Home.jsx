import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import UserReviews from '../components/userReviews';

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <UserReviews/>
    </>
  );
};

export default Home;