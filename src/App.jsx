import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage'
import Badminton from './Badminton.jsx'
import TableTennis from './components/tabletennis.jsx';


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/tabletennis" element={<TableTennis />} />
          
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
