import React from 'react'
import './App.css'
import Home from './Components/Home'
import Counter from './Components/Counter'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Components/About'
import { Link } from 'react-router-dom';
import UseRef from './Components/UseRef.jsx'
import UseContext from './Components/USeContext.jsx'
import Footer from './Components/Footer.jsx'
import Signin from './Components/Sigin.jsx'
import Signup from './Components/Signup.jsx'
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About college="KEC" clg1="IT" />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
            <Route path='/use-ref' element={<UseRef />}></Route>
            <Route path='/use-context' element={<UseContext />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
        </Routes>
        <center><Footer /></center>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
