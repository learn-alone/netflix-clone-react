import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axioss'
import { API_KEY, imgBaseUrl_original } from '../../Constants/Consatants'

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data);
          let x = Math.floor(Math.random()*19+1);
          console.log("Banner Movie Number : "+x);
          console.log(" Banner Name: "+response.data.results[x].name+" | Banner title : "+response.data.results[x].title);
          
        setMovie(response.data.results[x]);
      })
      return () => {
        
      }
    }, [])
    
    console.log("Netflix Originals");

  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imgBaseUrl_original+movie.backdrop_path : ""})`}}>
      
        <div className='content'>
            <h1 className='title'> {movie && movie.name !== undefined ? movie.name : movie ? movie.title  : ""}</h1>
            <div className='banner_buttons'>
                <button className='b_button'>Play</button>
                <button className='b_button'>My List</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview :"---- ----"}</h1>
        </div>
      
    </div>
  )
}
export default Banner
