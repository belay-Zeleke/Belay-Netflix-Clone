import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../../utils/axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'



var base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    
   
        const [movies, setmovies] = useState([]);
        var [trailerUrl, settrailerUrl] = useState("");

        useEffect(() => {
            // console.log(fetchUrl)
            async function fetchData() {
              var request = await axios.get(fetchUrl);
              // console.log(request);
              setmovies(request.data.results);
              return request;
            }
            fetchData(); 
        }, [fetchUrl]);

        const opts = {
            height: "390",
            width: "100%",
            playerVars: {
           autoplay: 1,
         },
        };
        const handelClick = (movie) => {
            if (trailerUrl) {
              settrailerUrl("");
            } else {
              movieTrailer(movie?.title || movie?.name || movie?.orginal_name )
                .then((url) => {
                  const UrlParse = new URLSearchParams(new URL(url).search);
                  settrailerUrl(UrlParse.get("v"))
                })
              .catch((error) => console.log(error));
            }
          };
        
    
    






  return (
    <div className='Row'>
      
      <h1 className='Row__Tittle'> {title}  </h1>
      <div className='Row__Posters'>
        {movies?.map((movie) => (
            <img 
            key={movie.id}
                onClick={() => handelClick(movie)}
                className={`Row__poster ${isLargeRow && "Row__LargePoster"}`}
            // className={ isLargeRow ?"Row__LargePoster" :"Row__poster" }
            // `Row__poster ${isLargeRow && "Row__LargePoster"}`

            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            />  
        ) )}
      </div> 
      <div className='Row__MovieTrailer'>
        {trailerUrl && <YouTube videoId={ trailerUrl } opts={opts} />} 
  
 </div>


    </div>
  );
}


export default Row
