import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage'
import TableTennis from './components/Tabletennis.jsx';


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tabletennis" element={<TableTennis />} />
          
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
