import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';

import Teams from './Pages/Team/Teams';
import Achievement from './Pages/Achievement/Achievement';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Header />} />
          
          <Route exact={true} path='/team' element={<Teams />} />
          <Route exact={true} path='/achieve' element={ <Achievement/>} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
