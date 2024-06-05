import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axioss'
import { imgBaseUrl_w300,imgBaseUrl_w500 } from '../../Constants/Consatants'

function RowPost(props) {
  const [originals, setOriginals] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(props.data);
      console.log( response.data);
      setOriginals(response.data.results);
    })
  }, [])
let i = props.data;

  return (

    <div className='row'>
      <h3 style={{paddingLeft:'20px'}}>{props.data}</h3>
      
      <div className="posters">
        {originals.map( (obj) => {
          if (i === "Netflix Originals") {
            return <img className='poster portrait' src={`${imgBaseUrl_w300+obj.poster_path}`} alt='poster'/>
          }else if(i === "Action" || i === "Romance")
              return <img className='poster large' src={`${imgBaseUrl_w500+obj.backdrop_path}`} alt='poster'/>
          else
              return <img className='poster' src={`${imgBaseUrl_w300+obj.backdrop_path}`} alt='poster'/>

        }      )}
      </div>
    </div>
  )
}

export default RowPost
