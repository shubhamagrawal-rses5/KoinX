import './App.css';
import Cryptocoins from './components/Cryptocoins';
import MobilePopup from './components/MobilePopup';
import MultiCarousel from './components/MultiCarousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MultiCarousel/>
      <Cryptocoins/>
      {/* <MobilePopup/> */}
    </div>
  );
}

export default App;
