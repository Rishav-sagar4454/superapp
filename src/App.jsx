
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import Browse from './pages/Browse'
import Movies from './pages/Movies'
import React from 'react'


const App=()=> {

  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/genre" element={<Genre/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path="/movies" element={<Movies/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App