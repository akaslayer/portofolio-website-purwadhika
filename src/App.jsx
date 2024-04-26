import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
