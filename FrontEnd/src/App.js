import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './Screens/HomeScreen';
import { Container } from 'react-bootstrap';
import './App.css';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <Router>
        <Header/>
        
        <main className="py-3">
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
           
          </Container>
        </main>
    
      <Footer/>
    </Router>
      

  
  
  );
}

export default App;
