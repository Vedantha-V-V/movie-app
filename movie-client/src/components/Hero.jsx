import React from 'react'
import MovieCard from './MovieCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({movies}) => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (<main>
    <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="heropattern"/>
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy</h1>
        </header>
    </div>
    <div className="wrapper items-center">
        <div className="all-movies w-[950px] h-[950px]">
        <Slider className="text-white" {...settings}>
            {
                movies.map((movie)=>{
                    return(
                        <MovieCard key={movie.imdbId} movie={movie}/>
                    )
                })
            }
        </Slider>
        </div>
    </div>
    </main>
  )
}

export default Hero