import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("All text cleared!", "success");

    }
    const handelOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!", "success");

    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className = "btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className = "btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className = "btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
            <button className = "btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className = "btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>

            {/* Apply condition here by own  */}
            {/* <p>if(text.length===0)?{0} words : {text.split(" ").length} words and {text.length} characters</p> */}
            
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
