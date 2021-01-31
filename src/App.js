import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";

import Home from './components/home'
import About from './components/about'
import Navbar from './components/navbar'
import Contact from './components/contact'

function App() {
  return (
    <div>
        <Navbar /> 
        <div>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
        </div>
    </div>
  );
}
const background = {
  backgroundSize: 'cover',
  overflow: 'hidden',
  width: '100%'
}

export default App;
