import React, {useState} from "react";
import Button from './Button.js';
/*import Text from './Text.js';
import Radio from './Radio.js';
import Num from './Num.js';
import Range from './Range.js';
import Submit from './Submit.js';
import Reset from './Reset.js';*/
import Input from './Input.js';
import "./index.css";

function App(){
  const [buttonType, setButtonType] = useState("primary");
  const [disabled, setDisabled] = useState("false");
  const [size, setSize] = useState("small"); 
  const [buttonLabel, setButtonLabel] = useState("Click"); 
  /*const [inputType, setInputType] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [numberMinValue, setNumberMinValue] = useState("");
  const [numberMaxValue, setNumberMaxValue] = useState("");
  const [inputRadio, setInputRadio] = useState("");*/
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [inputMaxLength, setInputMaxLenght] = useState(10);
  const [inputSize, setInputSize] = useState("Small"); 
  const [inputLabel, setInputLabel] = useState("");
  return(
    <div className="main">
      <h2>Button Component Demo</h2>
      <form>
      <label>Button Type</label> <br />
      <select value={buttonType} onChange={e => setButtonType(e.target.value)} style={{width: '100px'}}>
        <option value="">Select</option>
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
        <option value="Favourable">Favourable</option>
        <option value="Destructive">Destructive</option>
        <option value="Cancel">Cancel</option>
      </select><br /><br />
      <label>Button Size</label><br />
      <select value={size} onChange={e => setSize(e.target.value)} style={{width: '100px'}}>
        <option value="">Select</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br /><br />
      <label>Disabled</label><br />
      <input type="radio" name='disabled' value="True" onChange={e => setDisabled(e.target.value)}/>True
      <input type="radio" name='disabled' value="False" onChange={e => setDisabled(e.target.value)} checked/>False
      <br /><br />
      <label>Button Label</label><br />
      <input type="text" onChange={e => setButtonLabel(e.target.value)} />
      </form>
      <Button type={buttonType} state={disabled} size={size} label={buttonLabel}/>

      <h2>Input Field Component</h2>
      <label>Palceholder</label><br />
      <input type="text" value={inputPlaceholder} onChange={e => setInputPlaceholder(e.target.value)}/><br /><br />
      <label>Max Length</label><br />
      <input type="number" value={inputMaxLength} onChange={e => setInputMaxLenght(e.target.value)} /><br /><br />
      <label>Input Size</label><br />
      <select value={inputSize} onChange={e => setInputSize(e.target.value)} style={{width: '178px'}}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br /><br />
      <label>Label</label><br />
      <input type="text" value={inputLabel} onChange={e => setInputLabel(e.target.value)}/><br /><br />
      <Input placeholder={inputPlaceholder} maxLength={inputMaxLength} size={inputSize} label={inputLabel}/>
    </div>
  );
}

export default App;

/*

      <h2>Input Field Component Demo</h2>
      <form>
        <label>Input Field Type</label><br />
              <select value={inputType} onChange={e => setInputType(e.target.value)} style={{width: '177px'}}>
                <option value="">Select</option>
                <option value="number">Number</option>
                <option value="password">Password</option>
                <option value="radio">Radio</option>
                <option value="range">Range</option>
                <option value="reset">Reset</option>
                <option value="submit">Submit</option>
                <option value="text">Text</option>
              </select>
           
          {inputType === 'number' || inputType === 'range' ? 
          (
            <div><br />
            <label>Min Value</label><br />
              <input value={numberMinValue} type='text' onChange={e => 
              {if(!e.target.value.match("^[0-9]*$")){
                e.target.style.color = 'red'
              }
              else{
                e.target.style.color = 'black';
                setNumberMinValue(e.target.value);
              }}}/><br /><br />
              <label>Max Value</label><br />
              <input value={numberMaxValue} type='text' onChange={e => 
              {if(!e.target.value.match("^[0-9]*$")){
                e.target.style.color = 'red'
              }
              else{
                e.target.style.color = 'black';
                setNumberMaxValue(e.target.value);
              }}}/>
              </div>
          )
          : ""}
          
          {inputType === 'password' || inputType === 'text'? 
          (
            <div><br /><label>Placeholder Value</label><br />
            <input type="text" value={inputPlaceholder} onChange={e => setInputPlaceholder(e.target.value)}/>
            </div>
          )
          : ""}

          {inputType === 'radio'? 
          (
            <div><br /><label>Value</label><br />
              <input type="text" value={inputRadio} onChange={e => setInputRadio(e.target.value)}/>
            </div>
          )
          : ""}

          </form>
      {inputType === 'text' || inputType === 'password' ? (<Text type={inputType} placeholder={inputPlaceholder}/>) : ""}
      {inputType === 'radio' && inputRadio !== ''? (<Radio type={inputType} value={inputRadio}/>): ""}
      {inputType === 'number' && numberMinValue && numberMaxValue? <Num type={inputType} minimum={numberMinValue} maximum={numberMaxValue}/> : ""}
      {inputType === 'range' && numberMinValue && numberMaxValue? <Range type={inputType} minimum={numberMinValue} maximum={numberMaxValue}/> : ""}
      {inputType === 'submit' ? <Submit type={inputType} /> : ""}         
      {inputType === 'reset' ? <Reset type={inputType} /> : ""}     

 */