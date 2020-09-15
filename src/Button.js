import React from "react";
import "./index.css";

function Button({type, disabled, size, label}){
  let buttonBackground;
  let buttonHeight;
  let color = 'black';
  let border = '';
  let labelText = !label? "Click" : label;
  if(type === 'primary'){
    buttonBackground = 'blue'; 
    color = "white";
    border = "blue";
  } 
  else if(type === 'secondary'){
    buttonBackground = 'white';
    border = 'blue';
  }
  else if(type === 'favourable'){
    buttonBackground = 'green';
    color = "white";
    border = "green";
  }
  else if(type === 'favourable-secondary'){
    buttonBackground = 'white';
    color = "green";
    border = "green";
  }
  else if(type === 'destructive'){
    buttonBackground = 'red';
    color = "white";
    border = "red";
  }
  else if(type === 'destructive-secondary'){
    buttonBackground = 'white';
    color = "red";
    border = "red";
  }
  else if(type === 'cancel'){
    buttonBackground = 'white';
    border = 'black';
  }

  if(size === 'small'){
    buttonHeight = '24px';
  
  }
  else if(size === 'medium'){
    buttonHeight = '32px';
  }
  else if(size === 'large'){
    buttonHeight = '40px';
  }
  return(
    <div>
      <button type={type} style={{marginTop: '8px', backgroundColor: buttonBackground, borderColor: border, height: buttonHeight, borderRadius: '8px', color: color}} disabled={disabled} >{labelText}</button>
    </div>
  );
}
export default Button;