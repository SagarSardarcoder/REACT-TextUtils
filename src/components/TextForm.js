import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase" , "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase" , "success")
    }
    const handleClearClick = () => {
        setText("")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text here")
    return (
        <>
            <div className={`container text-${props.mode === "light" ?"dark":"light"}`}>
                <h1>Text Analyzer</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === "dark" ?"grey":"white"}} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to upperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>

            </div>
            <div className={`container my-3 text-${props.mode === "light" ?"dark":"light"}`}>
                <h2>Text summery</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>
                    {0.008 * text.split(" ").length} minutes to read
                </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
