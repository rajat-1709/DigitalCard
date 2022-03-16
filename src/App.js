import logo from './logo.svg';
import './App.css';
import About from './components/About';
import CardImage from './components/CardImage';

function App() {
  return (
    <div className='card-head'>
      <CardImage></CardImage>
      <About></About>
    </div>
  );
}

export default App;
