import React from 'react'
import { useState } from 'react'
import Input from '../Input'
import Output from '../Output'

function Project2() {


    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
  
    const [food1, setfood1] = useState();
    const [food2, setfood2] = useState();


  
    function counthandler() {
      setCount1(count1  + 1);
    }
  
    function counthandler2() {
      setCount2(count2  + 1);
    }
  
  
    function hotdoghandler() {
      setfood1("hotdogs");
    }
  
    function hamburgerhandler() {
      setfood2("hamburgers");
    }

    return (
        <div style={project2div}>
              <h4 style={h4style}>basic react state and props demo</h4>

                <Output count1={count1} count2={count2} food1={food1} food2={food2} />

                <Input counthandler={counthandler} hotdoghandler={hotdoghandler}  
                        counthandler2={counthandler2} hamburgerhandler={hamburgerhandler}
                    />
        </div>
    )
}

export default Project2




const h4style = {
    marginTop: '60px'
}


const project2div = {
  color: 'white'
}