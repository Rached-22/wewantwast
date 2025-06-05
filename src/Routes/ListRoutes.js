import React from 'react'
import { Routes, Route } from "react-router-dom"; 
import SelectSkip from '../Components/SelectSkip';

const ListRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<SelectSkip/>}/>
    </Routes>
  )
}

export default ListRoutes