import React from "react";
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import Card from '../components/Card';
import MovieCard from '../components/MovieCard';
import starWars from '../assets/images/scale2.jpg';
import marvel from '../assets/images/scale7.jpg';
import nationalGeographic from '../assets/images/scale8.jpg';
import disney from '../assets/images/scale17.jpg';
import pixar from '../assets/images/scale10.jpg';

function Home() {
  return (
    <div className="bg-[#040714] h-[100vh] overflow-x-hidden">
      <Header />
      <BannerSlider />
      <div className="mt-[50px] flex justify-around w-[90%] mx-auto sm:flex-col sm:items-center">
        <Card image={disney} />
        <Card image={pixar} />
        <Card image={marvel} />
        <Card image={starWars} />
        <Card image={nationalGeographic} />
      </div>
      <MovieCard title="Recommended For You"/>
      <MovieCard title="New to Disney+"/>
      <MovieCard title="Originals"/>
      <MovieCard title="Trending"/>
    </div>
  );
}

export default Home;
