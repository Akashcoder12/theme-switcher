import React ,{createContext,useState} from 'react';

//create context
export const ThemeContext=createContext();

//create provider
export  function ThemeProvider({children}) {
    
    const [theme,setTheme]=useState("light");

    const toggleTheme=()=>{
         setTheme(prev=>(prev==="light"?"dark":"light"));
    };

  return (
    <ThemeContext.Provider  value={{theme,toggleTheme}}>
       {children}
    </ThemeContext.Provider>
  )
}
