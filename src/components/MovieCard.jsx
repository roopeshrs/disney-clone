import React from "react";
import image1 from '../assets/images/badging.jpg';
import image2 from '../assets/images/badging2.jpg';
import image3 from '../assets/images/badging3.jpg';
import image4 from '../assets/images/badging6.jpg';
import image5 from '../assets/images/badging7.jpg';
import image6 from '../assets/images/scale.jpg';
import image7 from '../assets/images/scale3.jpg';
import image8 from '../assets/images/scale4.jpg';
import image9 from '../assets/images/scale5.jpg';
import image10 from '../assets/images/scale9.jpg';
import image11 from '../assets/images/scale11.jpg';
import image12 from '../assets/images/scale12.jpg';
import image13 from '../assets/images/scale13.jpg';
import image14 from '../assets/images/scale14.jpg';
import image15 from '../assets/images/scale15.jpg';
import image16 from '../assets/images/scale18.jpg';

const recommendedMovies = [
    image1, image2, image3, image4
]

const newMovies = [
    image5, image6, image7, image8
]

const originalsMovies = [
    image9, image10, image11, image12
]

const trendingMovies = [
    image13, image14, image15, image16
]

function MovieCard({title}) {
  return (
    <div className="mt-[50px] text-white w-[90%] mx-auto mb-[20px]">
      <h4 className="mb-[20px]">{title}</h4>
      <div className="grid grid-cols-4 sm:grid-cols-2 sm:gap-4 sm:place-items-center">
        {
            title === 'Recommended For You' && recommendedMovies.map((poster, index) => (
                <div key={index}>
                    <div className="h-[170px] w-[280px] cursor-pointer rounded-md overflow-hidden hover:scale-110 transition-transform sm:h-[100px] sm:w-[200px]">
                        <img src={poster} className="h-full w-full object-cover"/>
                    </div>
                </div>
            ))
        }
        {
            title === 'New to Disney+' && newMovies.map((poster, index) => (
                <div key={index}>
                    <div className="h-[170px] w-[280px] cursor-pointer rounded-md overflow-hidden hover:scale-110 transition-transform sm:h-[100px] sm:w-[200px]">
                        <img src={poster} className="h-full w-full object-cover"/>
                    </div>
                </div>
            ))
        }
        {
            title === 'Originals' && originalsMovies.map((poster, index) => (
                <div key={index}>
                    <div className="h-[170px] w-[280px] cursor-pointer rounded-md overflow-hidden hover:scale-110 transition-transform sm:h-[100px] sm:w-[200px]">
                        <img src={poster} className="h-full w-full object-cover"/>
                    </div>
                </div>
            ))
        }
        {
            title === 'Trending' && trendingMovies.map((poster, index) => (
                <div key={index}>
                    <div className="h-[170px] w-[280px] cursor-pointer rounded-md overflow-hidden hover:scale-110 transition-transform sm:h-[100px] sm:w-[200px]">
                        <img src={poster} className="h-full w-full object-cover"/>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  );
}

export default MovieCard;
