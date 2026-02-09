import React, {useState} from 'react'

export default function TextForm(props) {

    const clickUpper = () => {
        // console.log("Clicked");
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into Uppercase !","success");
    }

    const clickLower = () => {
        // console.log("Clicked");
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted into Lowercase !","success");
    }

    const clickCopy = () => {
      const text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to your clipboard !","success");
    }

    const clickClear = () => {
        // console.log("Clicked");
        setText("");
        props.showAlert("All text cleared successfully !","success");
    }

    const changeState = (event) => {
        // console.log("Written")
        setText(event.target.value);
    }


    const [text, setText] = useState('');
  return (
    <>
    <div>
      <div className='include' style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        {/* Textarea */}
        <h2 className='py-4'>{props.message}</h2>
        <div className="mb-3" > 
          <textarea className="form-control" id="myBox"
            rows="8" value={text} onChange={changeState}
            style={{backgroundColor : props.mode === 'light' ? 'grey' : 'white' , color : props.mode === 'light' ? 'white' : 'black'}}
            placeholder='Enter Text here'
          ></textarea>
        </div>
        <div className="d-flex align-items-center">
            <button className="btn btn-primary me-1" onClick={clickUpper}>
            Convert to Upper-case
          </button>
          <button className="btn btn-primary me-1" onClick={clickLower}>
            Convert to Lower-case
          </button>
          <button className="btn btn-primary me-1" onClick={clickCopy}>
            Copy
          </button>
          <button className="btn btn-danger me-1" onClick={clickClear}>
            Clear
          </button>
        </div>
    </div>
    <div style={{color : props.mode === 'light' ? 'black' : 'white'}}>
    <div className='container my-3'>
      {text.split(" ").length-1} words and {text.length} letters
    </div>
    <div className='container my-3'>
      Takes time to read {0.08 * (text.split(" ").length-1)} minutes
    </div>
    <h2>Preview</h2>
    <h4>{text.length > 0 ? text : "Write text above to preview here"}</h4>
    </div>
    </div>
    </>
  )
}
