import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Teams from './Pages/Team/Teams';
import Achievement from './Pages/Achievement/Achievement';
import AboutNew from './Pages/About/AboutNew';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/login" element={<Login/>}/>

          <Route exact={true} path="/" element={<Header />} />
          
          <Route exact={true} path='/team' element={<Teams />} />
          <Route exact={true} path='/achieve' element={<Achievement />} />
          <Route exact={true} path="/about" element={<AboutNew/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
