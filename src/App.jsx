import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PagesRoute from './routes/PagesRoute'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/*" element={<PagesRoute/>}>
        
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App