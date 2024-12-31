import React from 'react'
import './App.css'
import Home from './Components/Home'
import Counter from './Components/Counter'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Components/About'
import { Link } from 'react-router-dom';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
