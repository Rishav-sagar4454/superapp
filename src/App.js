
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'

const App=()=> {

  return (
    <BrowserRouter>
    
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Genre' element={<Genre/>}></Route>
       </Routes>
    
    </BrowserRouter>
  )
}

export default App