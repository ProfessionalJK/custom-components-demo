import React, {useState} from "react";
import Button from './Button.js';
import Input from './Input.js';
import DropDown from './DropDown.js';
import "./index.css";

function App(){
  const [buttonType, setButtonType] = useState("Primary");
  const [disabled, setDisabled] = useState("false");
  const [size, setSize] = useState("Small"); 
  const [buttonLabel, setButtonLabel] = useState("Click"); 
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [inputMaxLength, setInputMaxLenght] = useState(10);
  const [inputSize, setInputSize] = useState("Small"); 
  const [inputLabel, setInputLabel] = useState("");
  const [dropDownLabel, setDropDownLabel] = useState("");

  const fruits = [
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
      <form>
      <label>Button Type</label> <br />
      <select value={buttonType} onChange={e => setButtonType(e.target.value)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
        <option value="Favourable">Favourable</option>
        <option value="Favourable Secondary">Favourable Secondary</option>
        <option value="Destructive">Destructive</option>
        <option value="Destructive Secondary">Destructive Secondary</option>
        <option value="Cancel">Cancel</option>
      </select><br /><br />
      <label>Button Size</label><br />
      <select value={size} onChange={e => setSize(e.target.value)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br /><br />
      <label>Disabled</label><br />
      <input type="radio" name='disabled' value="True" onChange={e => setDisabled(e.target.value)}/>True
      <input type="radio" name='disabled' value="False" onChange={e => setDisabled(e.target.value)}/>False
      <br /><br />
      <label>Button Label</label><br />
      <input type="text" onChange={e => setButtonLabel(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}} />
      </form>
      <Button type={buttonType} state={disabled} size={size} label={buttonLabel}/>

      <h2>Input Field Component</h2>
      <label>Palceholder</label><br />
      <input type="text" value={inputPlaceholder} onChange={e => setInputPlaceholder(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/><br /><br />
      <label>Max Length</label><br />
      <input type="number" value={inputMaxLength} onChange={e => setInputMaxLenght(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/><br /><br />
      <label>Input Size</label><br />
      <select value={inputSize} onChange={e => setInputSize(e.target.value)} style={{width: '178px',borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br /><br />
      <label>Label</label><br />
      <input type="text" value={inputLabel} onChange={e => setInputLabel(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/><br /><br />
      <Input placeholder={inputPlaceholder} maxLength={inputMaxLength} size={inputSize} label={inputLabel}/>

      <h2>Drop Down Component</h2>
      <label>Label</label><br />
      <input type="text" value={dropDownLabel} onChange={e => setDropDownLabel(e.target.value)} style={{borderRadius: '8px', padding: '4px',borderColor: 'black'}}/><br /><br />
      <DropDown options={fruits} label={dropDownLabel}/>
    </div>
  );
}
export default App;