import './global.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import CarPage from './pages/CarPage'
import DealersPage from './pages/DealersPage'
import TestDrivePage from './pages/TestDrivePage'
import AccountPage from './pages/AccountPage'

export default function App() {
  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/car/:id" element={<CarPage />} /> 
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/test-drive" element={<TestDrivePage />} />
            <Route path="/account" element={<AccountPage />} /> 
          </Routes>
      </div>
    </Router>
  )
}