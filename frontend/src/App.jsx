import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserFormPage } from './pages/UserFormPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<Navigate to='/user-create' />} />
        <Route path='/user-create' element={<UserFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
