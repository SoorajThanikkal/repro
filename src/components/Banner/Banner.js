import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../components/axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    // Function to get a random number within a given range (min, max)
      const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    // Function to fetch a random movie
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
        const movies = response.data.results;
        const randomIndex = getRandomNumber(0, movies.length - 1);
        setMovie(movies[randomIndex]);
      } catch (error) {
        console.log('Error fetching random movie:', error);
      }
    };

    fetchRandomMovie();
      setInterval(()=>{
        getRandomNumber();
      },2000);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
      className='banner'
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ' '}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ' '}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
