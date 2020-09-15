import React, {useState} from "react";
import Button from './Button.js';
import Input from './Input.js';
import DropDown from './DropDown.js';
import "./index.css";

function App(){
  const [buttonType, setButtonType] = useState("primary");
  const [disabled, setDisabled] = useState("false");
  const [size, setSize] = useState("small"); 
  const [buttonLabel, setButtonLabel] = useState("Click"); 
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [inputMaxLength, setInputMaxLenght] = useState();
  const [inputSize, setInputSize] = useState("small"); 
  const [inputLabel, setInputLabel] = useState("");
  const [dropDownLabel, setDropDownLabel] = useState("");

  const options = [
    {code: "A", label: "Apple", text: "APPLE"},
    {code: "B", label: "Banana", text: "BANANA"},
    {code: "C", label: "Cherry", text: "CHERRY"},
    {code: "D", label: "Dates", text: "DATES"},
    {code: "E", label: "Eggfruit", text: "EGGFRUIT"},
    {code: "F", label: "Finger Lime", text: "FRINGER LIME"},
    {code: "G", label: "Grapes", text: "GRAPES"},
    {code: "H", label: "Hackberry", text: "HACKBERRY"},
    {code: "I", label: "Indian Prune", text: "INDIAN PRUNE"},
    {code: "J", label: "Jackfruit", text: "JACKFRUIT"}    
  ];
  return(
    <div className="main">
      <h2>Button Component Demo</h2>
      <label>Button Type</label>
      <div style={{padding: '4px'}}><select value={buttonType} onChange={e => setButtonType(e.target.value)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="favourable">Favourable</option>
        <option value="favourable-secondary">Favourable Secondary</option>
        <option value="destructive">Destructive</option>
        <option value="destructive-secondary">Destructive Secondary</option>
        <option value="cancel">Cancel</option>
      </select></div>
      <label>Button Size</label>
      <div style={{padding: '4px'}}><select value={size} onChange={e => setSize(e.target.value)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select></div>
      <label>Disabled</label>
      <div style={{padding: '4px'}}><input type="radio" name='disabled' value="True" onChange={e => setDisabled(e.target.value)}/>True
      <input type="radio" name='disabled' value="False" onChange={e => setDisabled(e.target.value)}/>False
      </div>
      <label>Button Label</label><br />
      <div style={{padding: '4px'}}><input type="text" onChange={e => setButtonLabel(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}} /></div>
      <Button type={buttonType} state={disabled} size={size} label={buttonLabel}/>

      <h2>Input Field Component</h2>
      <label>Palceholder</label>
      <div style={{padding: '4px'}}><input type="text" value={inputPlaceholder} onChange={e => setInputPlaceholder(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/></div>
      <label>Max Length</label>
      <div style={{padding: '4px'}}><input type="number" value={inputMaxLength} onChange={e => setInputMaxLenght(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/></div>
      <label>Input Size</label>
      <div style={{padding: '4px'}}><select value={inputSize} onChange={e => setInputSize(e.target.value)} style={{width: '178px',borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select></div>
      <label>Label</label>
      <div style={{padding: '4px'}}><input type="text" value={inputLabel} onChange={e => setInputLabel(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/></div>
      <Input placeholder={inputPlaceholder} maxLength={inputMaxLength} size={inputSize} label={inputLabel}/>

      <h2>Drop Down Component</h2>
      <label>Label</label>
      <div style={{padding: '4px'}}><input type="text" value={dropDownLabel} onChange={e => setDropDownLabel(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/></div>
      <DropDown optionArray={options} dropdownLabel={dropDownLabel}/>
    </div>
  );
}
export default App;