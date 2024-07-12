import MainLayout from './app/layout/mainLayout';
import './App.css';
// import { Outlet, Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChooseBikePage from './app/pages/chooseBikePage';
import BikeDescription from './app/pages/bikeDescription';
import ProductDetailsLayout from './app/layout/productDetailsLayout';
// import Router from "./routes";
export const secondary = '#37B6E9';
export const ternary = '#353F54';
export const primary = '#242C3B';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<ChooseBikePage />} />
          <Route path="description" element={<BikeDescription />} />
        </Route>
        <Route path="/description" element={<ProductDetailsLayout />}>
          <Route path="/description" element={<BikeDescription />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
