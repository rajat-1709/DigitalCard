import logo from './logo.svg';
import './App.css';
import About from './components/About';
import CardImage from './components/CardImage';
import Intro from './components/Intro';
import Foot from './components/footer';

function App() {
  return (
    <div className='card-head'>
      <CardImage></CardImage>
      <About></About>
      <Intro></Intro>
      <Foot></Foot>
    </div>
  );
}

export default App;
