import React from 'react'

function Output(props) {
    return (
        <div>
            <h4>Output Component</h4>
            <h2>I want {props.count1} {props.food1} and  {props.count2} {props.food2}</h2>
        </div>
    )
}

export default Output

