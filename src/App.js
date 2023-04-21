
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
    
     <Navbar />
    
     <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/product' element = {<Products />}/>
     </Routes>
    
    </div>
  );
}

export default App;
