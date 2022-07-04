import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("btn clicked") ;
        let newText = text.toUpperCase() ;
        setText(newText) ;
    }
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value) ;
    }
    const[text,setText] = useState('Enter your text here :-') ;
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="my-box"  value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
  )
}
