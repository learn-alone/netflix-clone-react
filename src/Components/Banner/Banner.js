import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axioss'
import { API_KEY, imgBaseUrl_original } from '../../Constants/Consatants'

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data);
        setMovie(response.data.results[2]);
      })
    }, [])
    

  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imgBaseUrl_original+movie.backdrop_path : ""})`}}>
      
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :"---- ----"}</h1>
            <div className='banner_buttons'>
                <button className='b_button'>Play</button>
                <button className='b_button'>My List</button>
            </div>
            <h1 className='discription'>When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store</h1>
        </div>
      
    </div>
  )
}
export default Banner
