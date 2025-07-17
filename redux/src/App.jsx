import React from 'react'
import { useState } from 'react'
import './App.css'
import Product from './Components/Product'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route  path='/' element={<Product/>}/>
            <Route path ="/cart" element={<Cart />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
