import Landing from './pages/Landing'
import Principal from './pages/Principal'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Principal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
