import React,{useState} from "react";

export default function TextForm(props) {
  const [text,setText] =useState("");
  function handleOnChange(e){
     setText(e.target.value);
  }

  const findLength=()=>{
    let arr=text.split(/\s+/);
    let count=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i].length>0){
        ++count;
      }
    }
    return count;
  }

  const handleUpClick= ()=>{
    let newText=text;
    setText(newText.toUpperCase());
    props.showAlert("Converted to UpperCase ", "success");
  }

  const handleSentenceClick= ()=>{
    let t=text;
    let words = t.toLowerCase().split(' ');
    let sentenceCased = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    setText(sentenceCased.join(' '));
    props.showAlert("Converted to Sentence Case ", "success");
  }

  const handleLoClick= ()=>{
    let newText=text;
    setText(newText.toLowerCase());
    props.showAlert("Converted to LowerCase ", "success");
  }

  const handleClearClick= ()=>{
    setText("");
  }

  const handleCopyClick= ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  }

  const  handleSpaceClick= ()=>{
    let arr=text.split(/\s+/);
    let newText=arr.join(" ");
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  }

  const  handleSpecialCharClick= ()=>{
    setText(text.replace(/[^a-zA-Z0-9 ]/g, ''));
    props.showAlert("Special Characters Removed", "success");
  }

  const  handleReverseClick= ()=>{
      const t=text;
      const words = t.split(' ');
      let result = '';
      for (let i = 0; i < words.length; i++){
        result = words[i].split('').reverse().join('') + ' ' + result;
      }
      setText(result);
    props.showAlert("Text Reversed", "success");
  }
  
 
  return (
    <>
     <div className="container my-3" style={{color : props.mode==='light' ? "black" : "white"}}>
      <div className="mb-3">
       <h2>{props.heading}</h2>
        <textarea
          className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light' ? "white" : "#042743", color : props.mode==='light' ? "dark" : "white"}} placeholder="Enter text here"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleLoClick}> Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}> Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleSentenceClick}> Convert to SentenceCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleSpaceClick}> Remove ExtraSpaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleSpecialCharClick}> Remove Special Characters</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleReverseClick}> Reverse Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopyClick}> Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleClearClick}> Clear Text</button>
     </div>
     <div className="container my-3" style={{color : props.mode==='light' ? "black" : "white"}}>
        <h2>Your Text Summary</h2>
          
         <h6>&nbsp;Words Count: {findLength()}</h6>
         <h6>&nbsp;Characters Count: {text.length-text.split("\n").length+1}</h6>
         <h6>&nbsp;Statements Count: {text.split("\n").filter((ele)=>{
            return ele.length!==0;
         }).length}</h6>
         <h6>&nbsp;Average Time To Read: {(0.05*findLength()).toPrecision(1)} minutes</h6>
     </div>

     <div className="container" style={{color : props.mode==='light' ? "black" : "white"}}>
        <h3>Preview</h3>
        <p>&nbsp;{text.length===0 ? "Nothing to Preview!" : text}</p>
     </div>
    </>
  );
}
