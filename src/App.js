import './App.css';
import { Route, Switch } from "react-router-dom";

import Home from './components/home'
import About from './components/about'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Container from 'react-bootstrap/Container'

function App() {
  return ( 
    <Container fluid>
      <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
        </Switch>
    </Container>
  );
}

export default App;
