import './App.css';
import Banner from './Components/Banner/Banner.js';
import Navbar from './Components/Navbar/Navbar.js'
import RowPost from './Components/RowPost/RowPost.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <div className="fade_bottom"></div>
      <div className="showLists">
      <RowPost data="Netflix Originals" durl=""/>
      <RowPost data="Trending"durl=""/>
      <RowPost data="action" durl=""/>
      <RowPost data="Comedy Movies" durl=""/>
      <RowPost data="Horror Movies" durl=""/>
      <RowPost data="Romance Movies" durl=""/>
      <RowPost data="Action Movies" durl=""/>
      <RowPost data="Documentaries" durl=""/>
      </div>
    </div>
  );
}

export default App;
