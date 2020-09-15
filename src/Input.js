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
    return(
        <div>
            <b>{label}</b>
            <div style={{padding: '4px'}}><input type="text" placeholder={placeholder} maxLength={maxLength} style={{marginTop: '8px', height: inputHeight, borderRadius: '8px', padding: '8px', borderColor: 'black'}}/></div>
        </div>
    );
}