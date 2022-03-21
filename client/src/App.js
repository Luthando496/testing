import React from 'react'
import Featured from './Components/Featured';
import Footer from './Components/Footer';
import './App.css'
import Search from './Components/Search';
import SingleHouse from './Components/SingleHouse';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


const App=()=> {



  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Featured />}/>

    <Route path='/search/:house' element={<Search/>}/>
    <Route path='/property/:id' element={<SingleHouse/>}/>
    </Routes>
    <Footer/>

    </Router>
    </>
    
  );
}

export default App;
