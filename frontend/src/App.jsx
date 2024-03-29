import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from './pages/SignIn';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
