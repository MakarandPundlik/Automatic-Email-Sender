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
           {darkTheme?
           <ion-icon name="sunny-sharp" size="large"></ion-icon>
           :<ion-icon size="large" name="moon-sharp"></ion-icon>}
         </div>
       
     </nav>
      <div className="content">
      Mauris venenatis, metus sed finibus efficitur, dolor odio dignissim lacus, quis lobortis lorem lorem sed justo. Etiam rutrum in nibh et condimentum. Praesent interdum porta justo et posuere. Nullam risus lacus, lobortis et blandit eget, tincidunt in augue. Mauris tempor eu elit sit amet vulputate. Donec non nulla quis nibh blandit gravida eu vel nisi. Morbi vehicula eget lorem non semper. Donec at scelerisque dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Vivamus congue viverra justo vitae placerat. Proin at hendrerit ex. Fusce vel est eget ante gravida ullamcorper. Ut nec nunc sit amet orci fermentum vehicula. Sed nec suscipit mauris. Nunc sem lorem, pulvinar eget semper nec, mollis quis quam. In in molestie sem, quis pulvinar dui. Donec vestibulum dignissim orci, quis facilisis felis molestie sed. Aenean dictum varius nisl, vel dignissim elit commodo eget.

Praesent in tellus ultricies, molestie mi in, dapibus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sodales dictum sapien vitae egestas. In hac habitasse platea dictumst. In ac placerat sem. Cras at lorem dui. Suspendisse auctor ornare neque, a blandit sapien finibus ac. Fusce convallis metus et egestas aliquet. Nullam a metus et massa eleifend mollis. Curabitur eget nisi vel ex congue pulvinar. Sed faucibus tristique pellentesque. Phasellus elementum sem at pharetra viverra.

Donec pulvinar vel orci non pellentesque. Vestibulum semper at lacus nec iaculis. Nulla quis enim libero. Donec placerat sem sit amet vestibulum porta. Nulla dictum pulvinar nisi, sit amet dignissim ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Proin placerat accumsan dolor quis varius. Aliquam vel nisi mauris. Etiam vitae nunc enim. Etiam elementum lacus non pulvinar porttitor. Cras molestie luctus dolor non vulputate. Aenean lectus mi, euismod nec nulla non, laoreet congue purus. Nulla eget lorem cursus, placerat lorem feugiat, ultricies nisl. Aliquam finibus id felis quis auctor.

Duis a mi felis. Ut tincidunt aliquet tincidunt. Duis ex sapien, malesuada id efficitur a, sollicitudin at purus. Cras et efficitur tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ac fermentum massa. Maecenas malesuada pellentesque tristique. Nam volutpat finibus scelerisque. Morbi eu interdum leo. Etiam vel consectetur nibh, quis mattis sem. Vivamus ac congue tortor, sed ullamcorper risus. Integer erat enim, ultrices et tempus ut, maximus vitae est. Nulla in ullamcorper mi.
      </div>
    </div>
  );
}


export default App;
