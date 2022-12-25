import './App.css';
import Cryptocoins from './components/Cryptocoins';
import MultiCarousel from './components/MultiCarousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MultiCarousel/>
      <Cryptocoins/>
    </div>
  );
}

export default App;
