import React from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import Products from './component/Products/Products.jsx'
import Restaurant from './component/Restaurant/Restaurant.jsx'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/Products" element={<Products />} />
       <Route path="/Restaurant" element={<Restaurant />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App