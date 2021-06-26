import logo from './logo.svg';
import './App.css';
import './stylesheets/master.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from './components/fundamentals.js';
import Carousel from './components/carousel.js';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Carousel />
    </div>
  );
}

export default App;
