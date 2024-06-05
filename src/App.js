import './App.css';
import Banner from './Components/Banner/Banner.js';
import Navbar from './Components/Navbar/Navbar.js'
import RowPost from './Components/RowPost/RowPost.js';
import Constants from './Constants/Consatants.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner url={Constants("Netflix Originals")}/>
      <div className="fade_bottom"></div>
      <div className="showLists">
      <RowPost data="Trending" url={Constants("Trending")}/>
      <RowPost data="Netflix Originals" url={Constants("Netflix Originals")}/>
      <RowPost data="Comedy Movies" url={Constants("Comedy Movies")}/>
      
      <RowPost data="Action" url={Constants("Action")}/>
      
      <RowPost data="Horror Movies" url={Constants("Horror Movies")}/>
      <RowPost data="Romance Movies" url={Constants("Romance Movies")}/>
      <RowPost data="Documentaries" url={Constants("Documentaries")}/>
      </div>
    </div>
  );
}

export default App;
