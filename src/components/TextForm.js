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
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copy to your clipboard !","success")
    }

    const clickRemovespace = () =>{
      let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !", "success");
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
            style={{backgroundColor : props.mode === 'light' ? 'white' : '#13466e' , color : props.mode === 'light' ? 'black' : 'white'}}
            placeholder='Enter Text here'
          ></textarea>
        </div>
        <div className="d-flex align-items-center">
            <button disabled={text.length===0}className="btn btn-primary me-1 my-1" onClick={clickUpper}>
            UpperCase
          </button>
          <button disabled={text.length===0}className="btn btn-primary me-1 my-1" onClick={clickLower}>
            LowerCase
          </button>
          <button disabled={text.length===0}className="btn btn-primary me-1 my-1" onClick={clickCopy}>
            Copy
          </button>
          <button disalbed={text.length===0}className="btn btn-primary me-1 my-1" onClick={clickRemovespace}>
            Remove Extra-Spaces
          </button>
          <button disabled={text.length===0}className="btn btn-danger me-1 my-1" onClick={clickClear}>
            Clear
          </button>
        </div>
    </div>
    <div style={{color : props.mode === 'light' ? 'black' : 'white'}}>
    <div className='container my-3'>
      {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} letters
    </div>
    <div className='container my-3'>
      Takes time to read {0.008 * (text.split(" ").filter((ele)=>{return ele.length !== 0}).length)} minutes
    </div>
    <h2>Preview</h2>
    <h4>{text.length > 0 ? text : "Write text above to preview here"}</h4>
    </div>
    </div>
    </>
  )
}
