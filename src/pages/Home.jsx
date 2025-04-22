import React, { useContext } from 'react'
import {ThemeContext} from '../ThemeContext';
import ThemeToggler from '../components/ThemeToggler';

export default function Home() {
 const {theme}=useContext(ThemeContext);

  return (
    <div style={{
        background: theme==="light" ? "#fff":"#121212",
        color: theme==="light"?"#000":"#fff",
        minHeight:"100vh",
        padding:"20px"   
         }}>
         <h1>Welcome Home!</h1>
         <p>This is a {theme} themed page.</p>
         <ThemeToggler/>
      
    </div>
  )
}
