import React from 'react'
import {ThemeProvider} from './ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <ThemeProvider>
       <Navbar/>
       <Home/>
    </ThemeProvider>
  )
}
