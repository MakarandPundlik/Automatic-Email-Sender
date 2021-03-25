import React,{useEffect, useState} from 'react';

import './App.css';
function App() {

  const getDefaultTheme=()=> {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'))
    return selectedTheme || false
  }
  const [darkTheme,setDarkTheme] = useState(getDefaultTheme());

  useEffect(()=>{
    localStorage.setItem('dark',JSON.stringify(darkTheme));
  },[darkTheme]);

  
  return (
    <div className={darkTheme?"dark-theme":"light-theme"}>
      
     <nav>
      
         <div  onClick={()=>setDarkTheme(prevTheme=>!prevTheme)}>
           {darkTheme?<ion-icon name="sunny-sharp" size="large"></ion-icon>:<ion-icon size="large" name="moon-sharp"></ion-icon>}
         </div>
       
     </nav>
      <div className="content">
      <h1>
       {darkTheme?"Dark":"Light"} Theme
       </h1>
      </div>
    </div>
  );
}


export default App;
