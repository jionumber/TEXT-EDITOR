import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';

function App() {
  const [mode, setMode] = useState('light');

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }


  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Textform mode={mode} btnName="UpperCase"/>

    </>
  );
}

export default App;
