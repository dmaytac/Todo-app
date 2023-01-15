import './App.css';
import Personal from './routes/Personal';
import Business from './routes/Business';
import ErrorPage from './routes/ErrorPage';
import Header from './routes/Header';
import Homepage from './routes/Homepage';
import { useState,useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode'; 
import { Routes,Route,Navlink } from 'react-router-dom';

const App = () =>{
  const [personal,setPersonal] = useState(1)
    const [business,setBusiness] = useState(1)
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    document.body.className = (isDarkMode ? 'dark':'light')
  },[isDarkMode])
  
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} />
      <DarkModeSwitch
        style={{position:'absolute',top:'2rem',right:'2rem'}}
        checked={isDarkMode}
        onChange={()=>setDarkMode(!isDarkMode)}
      />
      <Routes>
        <Route path='/' element={<Homepage personal={personal} business={business} isDarkMode={isDarkMode}/>}/>
        <Route path='/personal' element={<Personal setPersonal={setPersonal} isDarkMode={isDarkMode}/>}/>
        <Route path='/business' element={<Business setBusiness={setBusiness} isDarkMode={isDarkMode}/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
)}
export default App