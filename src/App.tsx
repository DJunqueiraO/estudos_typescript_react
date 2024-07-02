import React from 'react';
import './App.css';
import { AboutReactTypescript, AboutTypes, Home } from './pages/Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Components';

export function App() {

  const routes = [
    <Home/>,
    <AboutTypes/>,
    <AboutReactTypescript/>
  ].map(
    element => {
      const path = element.type.href || element.type.name.toLowerCase()
      return (
        <Route 
          key={path} 
          path={path} 
          element={element}/>
      )
    }
  )

  return (
    <Router>
      <div className="App">
        <Nav
          routes={routes}/>
        <Routes>
          {routes}
        </Routes>
      </div>
    </Router>
  );
}