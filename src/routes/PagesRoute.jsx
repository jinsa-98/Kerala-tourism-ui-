import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/layout'
import Home from '../Components/Home'
import Places from '../Components/Places'
import Explore from '../Components/Explore'
import Things from '../Components/Things'


function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      
        <Route path="places" element={<Places />} />
        <Route path="explore" element={<Explore />} />
        <Route path="things-to-do" element={<Things />} />
      </Route>
    </Routes>
  )
}

export default PagesRoute
