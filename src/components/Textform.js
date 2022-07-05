import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase() ;
        setText(newText) ;
    }
    const handlelowerClick=()=>{
        let newText = text.toLowerCase() ;
        setText(newText) ;
    }
    const handleClearText =() =>{
        setText("")
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
    }
    const handleOnChange=(event)=>{
        setText(event.target.value) ;
    }

    const[text,setText] = useState('') ;
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="my-box" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowerClick}>Convert to lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and { text.length } characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in textarea to preview it here'}</p>
        </div>
        </>
   )
}
