import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';


function App() {
  const {token, setToken} = useState();

  if(!token){
    <SignIn setToken={setToken} />
  }
  
  return (
    <AboutUs/>
    
  );
}

export default App;
