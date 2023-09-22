import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './pages/LandingPage';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Projects from './pages/ProjectsPage';
import WorkPage from './pages/WorkPage';
import TravelPage from './pages/TravelPage';
import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParallaxProvider>
    <div className="background">
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/travels" element={<TravelPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    </div>
    </ParallaxProvider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
