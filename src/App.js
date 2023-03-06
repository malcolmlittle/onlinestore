import './App.css';
//classic imports that will always be used when working with react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop /> } />
          <Route path='/cart' element={ <Cart /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;