import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner.js';
import Navbar from './Components/Navbar/Navbar.js'
import RowPost from './Components/RowPost/RowPost.js';
import Footer from './Components/Footer/Footer.js';
import Constants from './Constants/Consatants.js';
import YoutubePlayer from './Components/Youtube_Player/YoutubePlayer.js';
import FirstPage from './Components/FirstPage/FirstPage.js';

function App() {
  const [firstPage, setFirstPage] = useState(true);
  const [youPlay, setYouPlay] = useState( { isPlay:false, youLink: ""} );
  const handleYouPlay=(play,link)=>{ setYouPlay( {isPlay: play, youLink: link} ) }
  const [banerData, setBanerData] = useState();
  const handleBanerData=(data)=>{ setBanerData( data ) }
  const handleSetFirstPage=(x)=>{ setFirstPage( x ) }

  return (
    <div className="App">
      {firstPage ? <FirstPage updateFirstPage={handleSetFirstPage}/> : <>
      {/* <div style={{fontSize:'3rem', color:'white'}}>Isplay : {youPlay.isPlay.toString()} {youPlay.youLink } </div> */}
      <Navbar updateBanData={handleBanerData}/>
      <YoutubePlayer youState={youPlay} updateYouState={handleYouPlay}/>
      <Banner url={Constants("Netflix Originals")} banState={banerData} updateStates={[handleYouPlay, handleBanerData]}/>
      <div className="fade_bottom"/>
      <div className="showLists"> 
        <RowPost class=""         title="Trending"          updateYouState={handleYouPlay} url={Constants("Trending")}          imgProp={Constants("imgBaseUrl_w300")} imgType={""} />
        <RowPost class="portrait" title="Netflix Originals" updateYouState={handleYouPlay} url={Constants("Netflix Originals")} imgProp={Constants("imgBaseUrl_w300")} imgType={"poster"}/>
        <RowPost class=""         title="Comedy Movies"     updateYouState={handleYouPlay} url={Constants("Comedy Movies")}     imgProp={Constants("imgBaseUrl_w300")} imgType={""} />
        <RowPost class="large"    title="Action"            updateYouState={handleYouPlay} url={Constants("Action")}            imgProp={Constants("imgBaseUrl_w500")} imgType={""} />
        <RowPost class=""         title="Horror Movies"     updateYouState={handleYouPlay} url={Constants("Horror Movies")}     imgProp={Constants("imgBaseUrl_w300")} imgType={""} />
        <RowPost class="large"    title="Romance Movies"    updateYouState={handleYouPlay} url={Constants("Romance Movies")}    imgProp={Constants("imgBaseUrl_w500")} imgType={""} />
        <RowPost class=""         title="Documentaries"     updateYouState={handleYouPlay} url={Constants("Documentaries")}     imgProp={Constants("imgBaseUrl_w300")} imgType={""} />
        </div>
        </> }
        <Footer/>
      </div>
      
   
  );
}

export default App;
