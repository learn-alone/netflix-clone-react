import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axioss'
import { API_KEY, imgBaseUrl_w300 } from '../../Constants/Consatants'
function RowPost(props) {
  const [originals, setOriginals] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log( response.data);
      setOriginals(response.data.results);
    })
  }, [])
  
  return (
    <div className='row'>
      <h3>{props.data}</h3>
      <div className="posters">
        {originals.map((obj)=>
          <img className='poster' src={`${imgBaseUrl_w300+obj.backdrop_path}`} alt='poster'/>
        )}
      </div>
    </div>
  )
}

export default RowPost
