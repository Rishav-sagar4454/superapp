
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import Browse from './pages/Browse'



const App=()=> {

  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/genre" element={<Genre/>}/>
        <Route path='/browse' element={<Browse/>}/>
      
      
    </Routes>
    </BrowserRouter>
  )
}

export default App