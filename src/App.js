import './App.css';
import Navbar from './components/Navbar' ;
// import About from './components/About';
import Textform from './components/Textform';
import React,{useState} from 'react';


function App() {
  const[mode,setMode] = useState("light") ;

  const togglemode=()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#00244f"
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
    <Navbar title="TextUtils" setText="About" mode={mode} togglemode={togglemode} />

    <div className='container my-2'>
      <Textform heading="Enter the text to Analyze" mode={mode} />
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
