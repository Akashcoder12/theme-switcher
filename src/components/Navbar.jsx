import React, { useContext } from 'react';
import {ThemeContext} from '../ThemeContext';


export default function Navbar() {
  
 const {theme}=useContext(ThemeContext);

    return (
    <nav style={{
       background: theme==="light" ? "#eee" : "#333",
       color: theme==="light" ? "#000" :"#fff",
       padding :"10px"

    }}>
       <h2>My Themed App</h2>
    </nav>
  )
}
