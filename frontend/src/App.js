import './App.css';
import { 
  BrowserRouter as Router, Routes, Link, Route 
} from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/home">Principal</Link></li>
          <li><Link to="/products" >Productos</Link></li>
        </ul>
      </div>
      <hr />
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/login" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
    </Router>
  );
}

export default App;
