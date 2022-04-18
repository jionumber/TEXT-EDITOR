import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const touppercase = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
    }
    const tolowercase = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
    }
    const clear = () => {
        let NewText = '';
        setText(NewText);
    }
    const extraspaces = () => {
        let NewText = text.replace(/\s+/g, ' ').trim();
        setText(NewText);
    }
    const copytext = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }



    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1><center>Enter Your Text Here</center></h1>
                <form>
                    <div className="form-group">
                        <textarea style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' ,color:props.mode==='dark'?'white':'black'}} onChange={handleonchange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
                    </div>
                </form>
                <button type="button" onClick={touppercase} className="btn btn-primary my-2 mx-1">{props.btnName}</button>
                <button type="button" onClick={tolowercase} className="btn btn-primary my-2 mx-1">LowerCase</button>
                <button type="button" onClick={clear} className="btn btn-primary my-2 mx-1">Clear</button>
                <button type="button" onClick={extraspaces} className="btn btn-primary my-2 mx-1">Remove Extra Space</button>
                <button type="button" onClick={copytext} className="btn btn-primary my-2 mx-1">Copy Text</button>
                <p>
                    <h2>Your Text Summary</h2>
                    {text.split(' ').length} Words , {text.length} Characters and {text.split('.').length - 1} Sentences.
                </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
