import React, { useState, useRef, useEffect  } from 'react'
import './Navbar.css';
import axios from '../../axioss';
import { API_KEY, imgBaseUrl_w200 } from '../../Constants/Consatants';

function Navbar(props) {
  const [keyWord, setKeyword] = useState("")
  const [searchMovie, setSearchMovie] = useState([])
  const handleSearchMovie = ()=>{
          axios.get(`search/movie?query=${keyWord}&api_key=${API_KEY}`).then((Response)=>{
            if(Response && Response.data.results.length !== 0) setSearchMovie(Response.data.results)
          })
  }
  //  --------------------------   outside click event handle  ------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const handleClickOutside = (event) => {
          if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
              console.log('A click happened on the document!', event);
              setIsOpen(false);
          }
        };
  //UseEffet or Outside click Event
  useEffect(() => {
    const handleEscape = (event) => { if (event.key === 'Escape' && isOpen) setIsOpen(false); };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {      
                  document.removeEventListener('mousedown', handleClickOutside);
                  document.removeEventListener('keydown', handleEscape);
                 };
  }, [isOpen]); // Re-runs this Useffect only when isOpen changes

  const sentBanner= (data)=> {
    console.log("Banner data : "+data);
    props.updateBanData(data)

  }

  return (
    <div className='navbar'>
        <div className='navLeft'>
            <img className='navlogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix Logo'/> 
        </div>
        <div className='NavRight'>
            <div className='searchbar' onClick={ ()=>setIsOpen(true) }>
               <input type='text' onChange={(e)=>setKeyword(e.target.value)} placeholder=" Search Movies, TV Shows" /> 
               <img onClick={ ()=>handleSearchMovie() } src="/Assets/Img/icon_search_white.svg" alt='search'/> 
            </div>
            { searchMovie.length !== 0 && isOpen &&
              <div className='searchResult' ref={searchContainerRef}>
                {searchMovie.map((obj, index)=>{
                  return <> 
                          <div className='searchRow' onClick={()=>{sentBanner(searchMovie[index]) ; setIsOpen(false)}}> 
                            <img src={ imgBaseUrl_w200+obj.poster_path } alt="search"/> 
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                                <h3>{obj.title !== undefined ? obj.title : obj.name}</h3> 
                                <h4> {obj.release_date && obj.release_date} </h4> 
                            </div>
                          </div>  <hr/>  
                         </>
                } ) }  
              </div> 
            }  
            <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='Avatar'/>
        </div>
    </div>
  )
}

export default Navbar
