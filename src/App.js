import './App.css';
import Three from './components/three/Three';
import Two from './components/two/Two';
import Ins1 from './components/Ins1/Ins1';
import Navbar from "./components/navbar/Navbar"
import Main from "./components/main/Main"
import BannerBottom from './components/bannerBottom/BannerBottom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Ins1 />
      <BannerBottom />
      <Ins1 />
      <Two />
      <Three />
    </div>
  );
}

export default App;
