import React, {setState} from 'react';
import $ from 'jquery';
import './index.css';

export default class DropDown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      val: "Choose",
      optionLabel: "label",
      filterLabel: "contains",
      options: [],
    }; 
  }

  selectFruits = (e) => {
    let div, input, i, status;    
    div = document.getElementById("myContents");
    input = div.getElementsByTagName("input");
    if(e.target.checked){
      const temp = [...this.state.options, e.target.value];
      this.setState({options: temp,});
      if(temp.length > 1)
        this.setState({val: temp.length+" Items are Selected"});
      else
        this.setState({val: temp.join(", ")});
    }
    else{
      const temp = [...this.state.options]
      const index = temp.indexOf(e.target.value);
      temp.splice(index,1);
      this.setState({options: temp,});
      if(temp.length !== 0){
        if(temp.length > 1)
          this.setState({val: temp.length+" Items are Selected"});
        else
          this.setState({val: temp.join(", ")});
      }else
        this.setState({val: "Choose"});
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

  selectChange = () => {
    let div, input, i, temp = [];
    div = document.getElementById("myContents");
    input = div.getElementsByTagName("input");
    for (i = 0; i < input.length; i++) {
      if (document.getElementById("selectAll").checked) {
        if(input[i].style.display === 'block'){
          input[i].checked = true;
          temp = [...temp, input[i].value];
          this.setState({options: temp,});
          if(temp.length > 1)
            this.setState({val: temp.length+" Items are Selected"});
          else
            this.setState({val: temp.join(", ")});
        }
        else{
          input[i].checked = false;
        }        
      } else {
        input[i].checked = false;
        this.setState({options: []});
        this.setState({val: "Choose"});
      }   
    }
  }

  func = (e) => {
    this.setState({val: e.target.value});
    document.getElementById("myDropdown").classList.toggle("show");
  }

  myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  myFunct = (e) => {
    if(e.target.value === 'text' || e.target.value === 'label')
      this.setState({optionLabel: e.target.value});
    else
      this.setState({filterLabel: e.target.value});
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("selectAll").checked = false;
    document.getElementById("myInput").value = '';
    this.filterFunction();
    this.selectChange();
  }

  filterFunction = () => {
    let inp, input, filter, button, i, div, txtValue, status, count = false;
    inp = document.getElementById("myInput");
    filter = inp.value;
    div = document.getElementById("myContents");
    button = div.getElementsByTagName("button");
    input = div.getElementsByTagName("input");
    if(this.state.filterLabel === 'contains'){
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
    else if(this.state.filterLabel === 'startsWith'){
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

  toggle = () => {
    if (($("#myDropdown").css('display') === 'block')){
      document.getElementById("myDropdown").classList.toggle("show");
    }
  }
  
  render(){
    return(
      <div key="unique1" >
      <label>Option Label</label>
      <div style={{padding: '4px'}}><select value={this.state.optionLabel} onChange={e => this.myFunct(e)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="label">Label</option>
        <option value="text">Text</option>
      </select></div>
      <label>Filter On</label>
      <div style={{padding: '4px'}}><select value={this.state.filterLabel} onChange={e => this.myFunct(e)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="contains">Contains</option>
        <option value="startsWith">Starts With</option>
        <option value="endsWith">Ends With</option>
      </select></div>
    <div className="dropdown" key="unique2">
      {this.props.dropdownLabel}<br />
      <button onClick={this.myFunction} className="dropbtn">{this.state.val}</button>
      <div id="myDropdown" className="dropdown-content">
        <input type="checkbox" id="selectAll" value="allSelected" style={{float: 'left'}} onClick={this.selectChange}/>
        <input type="text" placeholder="Search.." id="myInput" onKeyUp={this.filterFunction} />
        <br />
        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}} id="myContents">
        {this.props.optionArray.map((opt) => (
          <div>
            <button value={opt[this.state.optionLabel]} onClick={e => this.func(e)}>{opt[this.state.optionLabel]}</button>
            <input type="checkbox" className="fruits" value={opt[this.state.optionLabel]} onClick={e => this.selectFruits(e)} style={{display: 'block'}}/>
            </div>
          ))}
        <p id="emptyMesage" style={{textAlign: 'center', display: 'none', margin: 0, padding: 0}}>No results found</p>       
        </ul>
      </div>
      </div>
      <div id="toggle" style={{width: '100%', height: '300px'}} onClick={this.toggle}>
        <h1 style={{visibility: 'hidden'}}></h1>
      </div>
    </div>
    );
  }
}
//export default DropDown;
/*
export default function DropDown({optionArray, dropdownLabel}){
  const [val, setVal] = useState("Choose");
  const [optionLabel, setOptionLabel] = useState("label"); 
  const [filterLabel, setFilterLabel] = useState("contains"); 
  const [options, setOptions] = useState([]);
  const selectFruits = (e) => {
    let div, input, i, status;    
    div = document.getElementById("myContents");
    input = div.getElementsByTagName("input");
    if(e.target.checked){
      const temp = [...options, e.target.value];
      setOptions(temp);
      if(temp.length > 1)
        setVal(temp.length+" Items are Selected");
      else
        setVal(temp.join(", "));
    }
    else{
      const temp = [...options]
      const index = temp.indexOf(e.target.value);
      temp.splice(index,1);
      setOptions(temp);
      if(temp.length !== 0){
        if(temp.length > 1)
          setVal(temp.length+" Items are Selected");
        else
          setVal(temp.join(", "));
      }else
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
          setOptions(temp);
          if(temp.length > 1)
            setVal(temp.length+" Items are Selected");
          else
            setVal(temp.join(", "));
        }
        else{
          input[i].checked = false;
        }        
      } else {
        input[i].checked = false;
        setOptions([])
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
      <label>Option Label</label>
      <div style={{padding: '4px'}}><select value={optionLabel} onChange={e => myFunct(e)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="label">Label</option>
        <option value="text">Text</option>
      </select></div>
      <label>Filter On</label>
      <div style={{padding: '4px'}}><select value={filterLabel} onChange={e => myFunct(e)} style={{width: '178px', borderRadius: '8px', padding: '4px',borderColor: 'black'}}>
        <option value="contains">Contains</option>
        <option value="startsWith">Starts With</option>
        <option value="endsWith">Ends With</option>
      </select></div>
    <div className="dropdown" key="unique1">
      {dropdownLabel}<br />
      <button onClick={myFunction} className="dropbtn">{val}</button>
      <div id="myDropdown" className="dropdown-content">
        <input type="checkbox" id="selectAll" value="allSelected" style={{float: 'left'}} onClick={selectChange}/>
        <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction} />
        <br />
        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}} id="myContents">
        {optionArray.map((opt) => (
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
}*/