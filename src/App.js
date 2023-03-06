import './App.css';
//classic imports that will always be used when working with react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/cart' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;