import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Register from './pages/Register'

function App() {
  return(
    <BrowserRouter>
      <Routes>

        <Route element = {<MainLayout />}>

          <Route path="/" element = {<Home />}/>

          <Route path="/projects" element = {<Projects />}/> 
          
          <Route path="/contact" element = {<Contact />}/> 

          <Route path="/login" element = {<Login />}/> 

        </Route>

        <Route path='/register' element={<Register/>}/>
        <Route path="/dashboard" element = {<Dashboard />}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
