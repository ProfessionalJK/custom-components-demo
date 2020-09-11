import React from 'react';

export default function Input({placeholder, maxLength, size, label}){
    let inputHeight;
    if(size === 'Small'){
        inputHeight = '24px';
      }
      else if(size === 'Medium'){
        inputHeight = '32px';
      }
      else if(size === 'Large'){
        inputHeight = '40px';
      }
      if(maxLength === ''){
          maxLength = 10;
      }
    return(
        <div>
            <b>{label}</b><br />
            <input type="text" placeholder={placeholder} maxLength={maxLength} style={{marginTop: '8px', height: inputHeight, borderRadius: '8px', paddingLeft: '8px', borderColor: 'black'}}/>
        </div>
    );
}