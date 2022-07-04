import './App.css';
import Navbar from './components/Navbar' ;
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" setText="About" />

    <div className='container my-3'>
      <Textform heading="Enter the text to Analyze"/>
    </div>
    </>
  );
}

export default App;
