import React, {useState} from 'react';
import './index.css';

export default function DropDown({options, label}){
  const [val, setVal] = useState("Choose");
  const [optionLabel, setOptionLabel] = useState("label"); 
  const [filterLabel, setFilterLabel] = useState("contains"); 
  const [fruits, setFruits] = useState([]);
  const selectFruits = (e) => {
    let div, input, i, status;    
    div = document.getElementById("myContents");
    input = div.getElementsByTagName("input");
    if(e.target.checked){
      const temp = [...fruits, e.target.value];
      setFruits(temp);
      setVal(temp.join(", "));
    }
    else{
      const temp = [...fruits]
      const index = temp.indexOf(e.target.value);
      temp.splice(index,1);
      setFruits(temp);
      if(temp.length !== 0)
        setVal(temp.join(", "));
      else
        setVal("Choose")
    } 
    for (i = 0; i < input.length; i++) {
      if (input[i].checked) {
        status = true;
      } else {
        status = false
        break;
      }
    }
    status === true ? document.getElementById("selectAll").checked = true : document.getElementById("selectAll").checked = false;
  }

  const selectChange = () => {
    let div, input, i, temp = [];
    div = document.getElementById("myContents");
    input = div.getElementsByTagName("input");
    for (i = 0; i < input.length; i++) {
      if (document.getElementById("selectAll").checked) {
        if(input[i].style.display === 'block'){
          input[i].checked = true;
          temp = [...temp, input[i].value];
          setFruits(temp);
          setVal(temp.join(", "));
        }
        else{
          input[i].checked = false;
        }        
      } else {
        input[i].checked = false;
        setFruits([])
        setVal("Choose");
      }   
    }
  }

  const func = (e) => {
    setVal(e.target.value);
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const myFunct = (e) => {
    if(e.target.value === 'text' || e.target.value === 'label')
      setOptionLabel(e.target.value);
    else
      setFilterLabel(e.target.value);
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("selectAll").checked = false;
    document.getElementById("myInput").value = '';
    filterFunction();
    selectChange();
  }

  const filterFunction = () => {
    let inp, input, filter, button, i, div, txtValue, status, count = false;
    inp = document.getElementById("myInput");
    filter = inp.value;
    div = document.getElementById("myContents");
    button = div.getElementsByTagName("button");
    input = div.getElementsByTagName("input");
    if(filterLabel === 'contains'){
      for (i = 0; i < button.length; i++) {
        txtValue = button[i].textContent || button[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          button[i].style.display = "block";
          input[i].style.display = "block";
          count = true;
        } else {
          button[i].style.display = "none";
          input[i].style.display = "none";
        }
      }
    }
    else if(filterLabel === 'startsWith'){
      for (i = 0; i < button.length; i++) {
        txtValue = button[i].innerText;
        if (txtValue.startsWith(filter)) {
          button[i].style.display = "block";
          input[i].style.display = "block";
          count = true;
        } else {
          button[i].style.display = "none";
          input[i].style.display = "none";
        }
      }
    }
    else{
      for (i = 0; i < button.length; i++) {
        txtValue = button[i].innerText;
        if (txtValue.endsWith(filter)) {
          button[i].style.display = "block";
          input[i].style.display = "block";
          count = true;
        } else {
          button[i].style.display = "none";
          input[i].style.display = "none";
        }
    }
    }
    count ? document.getElementById("emptyMesage").style.display = 'none' : document.getElementById("emptyMesage").style.display = 'block';
    
    for (i = 0; i < input.length; i++) {
      if (input[i].checked) {
        status = true;
      } else {
        status = false
        break;
      }
    }
    status === true ? document.getElementById("selectAll").checked = true : document.getElementById("selectAll").checked = false;
  }
  
  return(
    <div key="unique1">
      <label>Option Label</label><br />
      <select value={optionLabel} onChange={e => myFunct(e)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="label">Label</option>
        <option value="text">Text</option>
      </select><br /><br />
      <label>Filter On</label><br />
      <select value={filterLabel} onChange={e => myFunct(e)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="contains">Contains</option>
        <option value="startsWith">Starts With</option>
        <option value="endsWith">Ends With</option>
      </select><br /><br />
    <div className="dropdown" key="unique1">
      {label} <br />
      <button onClick={myFunction} className="dropbtn">{val}</button>
      <div id="myDropdown" className="dropdown-content">
        <input type="checkbox" id="selectAll" value="allSelected" style={{float: 'left'}} onClick={selectChange}/>
        <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction} />
        <br />
        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}} id="myContents">
        {options.map((opt) => (
          <div>
            <button value={opt[optionLabel]} onClick={e => func(e)}>{opt[optionLabel]}</button>
            <input type="checkbox" className="fruits" value={opt[optionLabel]} onClick={e => selectFruits(e)} style={{display: 'block'}}/>
            </div>
          ))}
        <p id="emptyMesage" style={{textAlign: 'center', display: 'none', margin: 0, padding: 0}}>No results found</p>       
        </ul>
      </div>
    </div>
    </div>
  );
}