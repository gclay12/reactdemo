import React from 'react'
import {useState } from 'react'

function Form() {

    const [formData, setFormData] = useState({
        crust: "",
        size: "",
        toppings: "",  
      })
  
      const [submit, setSubmit] = useState("") 

      function submit1() {
        setSubmit('form submitted')
      }

    return (
        <div>
            <h4 style={textstyle}>React form handling demo</h4>

            <h4 style={textstyle}>Form</h4>
            
            <h3 style={textstyle}>Order Pizza</h3>
            
            <input style={inputstyle} onChange={(e) => setFormData({...formData, crust: e.target.value})}  value={formData.crust} type="text" name="crust" placeholder="crust" /><br></br>
            <input style={inputstyle} onChange={(e) => setFormData({...formData, size: e.target.value})}  value={formData.size} type="text" name="size" placeholder="size" /><br></br>
            <input style={inputstyle} onChange={(e) => setFormData({...formData, toppings: e.target.value})}  value={formData.toppings} type="text" name="toppings" placeholder="toppings" /><br></br>
            <button style={buttonstyle} onClick={submit1}>Submit</button>
            
            <h3 style={textstyle}>crust: { formData.crust}</h3>
            <h3 style={textstyle}>size: {  formData.size}</h3>
            <h3 style={textstyle}>toppings: { formData.toppings}</h3>
           
            <h3 style={textstyle}>{submit}</h3>

            
        
        </div>
    )
}



export default Form

const inputstyle = {
    color: 'white',
    width: '200px',
    height: '30px',
    border: '1px solid lightgrey',
    backgroundColor: 'rgb(100,100,100,0.5)',
    marginTop: '5px',
}


const textstyle = {
    color: 'white'
}


const buttonstyle = {
    color: 'white',
    width: '100px',
    height: '30px',
    border: '1px solid lightgrey',
    backgroundColor: 'rgb(75,75,75,0.5)',
    marginTop: '5px',
}


