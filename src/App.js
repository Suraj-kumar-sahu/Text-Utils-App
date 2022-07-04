import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar' ;
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" setText="About" />

    <div className='container my-2'>
      <Textform heading="Enter the text to Analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
