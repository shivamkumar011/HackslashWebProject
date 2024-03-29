import Header from './components/Header'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router}from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import Home from './components/Home'
import Page1 from './components/Page1';
import Services from './components/Services';
import { useMediaQuery } from 'react-responsive'
import Carousel from './components/Carousel';
import Review from './components/Review';
import { FooterContainer } from './containers/footer.js'
import { AboveContainer } from './containers/above'
import { ImageContainer } from './containers/images.js';
import BestCari from './BestCari';
import Chap from './Chap';
function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  
  
  return (
   // <div className="App">
   <>
   <Header/>
   
      
     <Router>
      
    < Navbar />
    </Router>
    <Home/>
    <Page1/>
    {isMobile?<Carousel/>:<Services/>}
   
    <BestCari/>
    <Chap/>
    <ImageContainer/>
    <Review/>
    <AboveContainer />
    <FooterContainer />
    </>
  );
  }
 


export default App;
