import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../utils/axios'
import requests from '../../utils/request'


function Banner() {
    const [movie, setmovie] = useState([]);
  
    var truncate = (str, num) => {
      return str?.length > num ? str.substr(0, num-1) + "..." : str;
    }
  
    useEffect(() => {
        // console.log(fetchUrl)
        
        async function fetchData() {
          var request = await axios.get(requests.fetchNetflixOrginals);
          // console.log(request);
    
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]
            );
          return request;
        }
        fetchData(); 
     }, []);  
     console.log(movie);
     
   








  return (
    <header
      className='Banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie.backdrop_path}" ) `,
        backgroundPosition: "center center",
      }}
    >
      <div className='Banner__Container'>
        <h1 className='Banner__Title'>
   {movie.title || movie.name || movie.original_name}
        </h1>
        <div className='Banner__Buttons' >
          <button className='Banner__Button'> Play </button>
          <button className='Banner__Button'> My List </button>
        </div>
        <h1 className='Banner__Description'>
          {truncate((movie?.overview), 150)}
        </h1>
      </div>
      
      <div className='Banner__FedeBottom'/>

   </header>
      
  )
}

export default Banner
