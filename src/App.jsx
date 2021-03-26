import React,{useEffect, useState} from 'react';
import Form from './components/Form';
import './App.css';
function App() {

  const getDefaultTheme=()=> {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'))
    return selectedTheme || false
  }
  const [darkTheme,setDarkTheme] = useState(getDefaultTheme());

  useEffect(()=>{
    localStorage.setItem('dark',JSON.stringify(darkTheme));
    document.body.style.backgroundColor=darkTheme?"#241e33":"#ffffff";
  },[darkTheme]);

  
  return (
    <div className={darkTheme?"dark-theme":"light-theme"}>
      
     <nav>
         <div onClick={()=>setDarkTheme(prevTheme=>!prevTheme)}>
           {darkTheme?
           <ion-icon name="sunny-sharp" size="large"></ion-icon>
           :<ion-icon size="large" name="moon-sharp"></ion-icon>}
         </div>
      </nav>
      <div className="content">
        <Form/>
      </div>
    </div>
  );
}


export default App;
