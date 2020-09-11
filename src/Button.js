import React from "react";
import "./index.css";

function Button({type, state, size, label}){
  let buttonBackground;
  let buttonHeight;
  let color = 'black';
  let border = '';
  let status = state === 'True' ? true : false;
  let labelText = !label? "Click" : label;
  if(type === 'Primary'){
    buttonBackground = 'blue'; 
    color = "white";
    border = "blue";
  } 
  else if(type === 'Secondary' || type === 'Cancel'){
    buttonBackground = 'white';
    border = 'black';
  }
  else if(type === 'Favourable'){
    buttonBackground = 'green';
    color = "white";
    border = "green";
  }
  else if(type === 'Favourable Secondary'){
    buttonBackground = 'white';
    color = "green";
    border = "green";
  }
  else if(type === 'Destructive'){
    buttonBackground = 'red';
    color = "white";
    border = "red";
  }
  else if(type === 'Destructive Secondary'){
    buttonBackground = 'white';
    color = "red";
    border = "red";
  }

  if(size === 'Small'){
    buttonHeight = '24px';
  
  }
  else if(size === 'Medium'){
    buttonHeight = '32px';
  }
  else if(size === 'Large'){
    buttonHeight = '40px';
  }
  const click = () => {
    alert("Button Type: "+ type + "\nButton Size: " + size + "\nButton Disabled: "+ state);
  }
  return(
    <div>
      <button type={type} style={{marginTop: '8px', backgroundColor: buttonBackground, borderColor: border, height: buttonHeight, borderRadius: '8px', color: color}} disabled={status} onClick={click}>{labelText}</button>
    </div>
  );
}
export default Button;