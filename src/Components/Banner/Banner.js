import React, { useEffect } from 'react'
import './Banner.css'
import axios from '../../axioss'
import { API_KEY, imgBaseUrl_original } from '../../Constants/Consatants'

function Banner(props) {

    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data);
          let x = Math.floor(Math.random()*19+1);
          console.log("Banner Movie Number : "+x);
          console.log(" Banner Name: "+response.data.results[x].name+" | Banner title : "+response.data.results[x].title);
          props.updateStates[1](response.data.results[x]);
      })
      return () => {
      }
    }, [])
    
    const sendYouLink = (id)=> {
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
            console.log(response.data);
            props.updateStates[0](true, response.data.results[0].key)  }
      })
    }
  return (
    <div className='banner' style={{backgroundImage:`url(${props.banState ? imgBaseUrl_original+props.banState.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'> {props.banState && props.banState.name !== undefined ? props.banState.name : props.banState ? props.banState.title  : ""}</h1>
            <div className='banner_buttons'>
                <button className='b_button' onClick={ ()=> sendYouLink(props.banState.id) }>Trailer</button>
                <button className='b_button'>My List</button>
            </div>
            <h1 className='discription'>{props.banState ? props.banState.overview :""}</h1>
        </div>
      
    </div>
  )
}
export default Banner
