import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axioss'
import { API_KEY, imgBaseUrl_w300 } from '../../Constants/Consatants'
import { scrollToTop } from '../../Components/Tools'

function RowPost(props) {
  const [rowAdapter, setRowAdapter] = useState([])

  let imgSrc = imgBaseUrl_w300
  imgSrc = props.imgProp;

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log( props.title );
      console.log( response.data );
      setRowAdapter( response.data.results );
    })
    return () => {}
  }, [props.title, props.url])

  const trailerHandle = (id) => {
    console.log("ID : "+id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&lenguage=en-US`)
    .catch(function (error) {
          if (error.response) {
            console.log("Error Catch 1");        // First Case of Error : The request was made and the server responded with a status code
            console.log(error.response.data);
            console.log(error.response.status);  //status code
            console.log(error.response.headers);
          } else if (error.request) {
            console.log("Error Catch Case 2");   // Case 2 of Error : The request was made but no response was received
            console.log(error.request);          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
          } else {
            console.log("Error Catch 3");        // Case # of Error : Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        console.log("Error Catch General info (4)");
        console.log(error.config);
    })
    .then((response)=>{
      if(response && response.data.results.length !== 0){
        console.log(response.data)
        console.log("Results Array Size : "+response.data.results.length)
        props.updateYouState(true , response.data.results[0].key)
      }
      }  )
  }
  
  return (
    <div className='row'>
      <h3 style={{paddingLeft:'20px'}}>{props.title}</h3>
      <div className="posters">
        {rowAdapter.map( (obj,index) => { 
          props.imgType === "poster" ? imgSrc = props.imgProp + obj.poster_path : imgSrc = props.imgProp + obj.backdrop_path;
          return <img className={`${props.class} poster`} src={imgSrc} onClick={()=>{trailerHandle(obj.id); scrollToTop() }} alt='poster'/>
        }      )}
      </div>
    </div>
  )
}

export default RowPost
