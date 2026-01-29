import './global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountPage from './pages/AccountPage.jsx';
import CarPage from './pages/CarPage.jsx';
import CatalogPage from './pages/CatalogPage';
import DealersPage from './pages/DealersPage.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatalogPage/>} />
        
      </Routes>
    </Router>
  )
}