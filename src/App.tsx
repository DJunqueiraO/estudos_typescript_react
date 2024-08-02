import React from 'react';
import './App.css';
import { 
  AboutReactTypescript, 
  AboutTypes, 
  CssProTips1, 
  CssProTips10, 
  CssProTips11, 
  CssProTips12, 
  CssProTips2, 
  CssProTips3, 
  CssProTips4, 
  CssProTips5, 
  CssProTips6, 
  CssProTips7, 
  CssProTips8, 
  CssProTips9, 
  Home 
} from './pages/Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Components';

export function App() {

  const routes = [
    <Home/>,
    <AboutTypes/>,
    <AboutReactTypescript/>,
    <CssProTips1/>,
    <CssProTips2/>,
    <CssProTips3/>,
    <CssProTips4/>,
    <CssProTips5/>,
    <CssProTips6/>,
    <CssProTips7/>,
    <CssProTips8/>,
    <CssProTips9/>,
    <CssProTips10/>,
    <CssProTips11/>,
    <CssProTips12/>
  ].map(
    element => {
      const path = `/${element.type.href || element.type.name.toLowerCase()}`
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
      <div className="app">
        <Nav
          routes={routes}/>
        <Routes>
          {routes}
        </Routes>
      </div>
    </Router>
  );
}