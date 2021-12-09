import React from 'react'

function Input({counthandler, hotdoghandler, counthandler2, hamburgerhandler}) {
    return (
        <div>
            <h4>Input Component</h4>

            <button style={button} onClick={counthandler}>How many</button>
            <button style={button} onClick={hotdoghandler}>Hotdogs</button>

            <button style={buttonmargin} onClick={counthandler2}>How many</button>
            <button style={button} onClick={hamburgerhandler}>hamburgers</button>
        </div>
    )
}

export default Input


const button = {
    color: 'white',
    border: '1px solid lightgrey',
    backgroundColor: "rgba(100,100,100,0.5)",
    borderRadius: '5px',
    marginLeft: '5px'
}

const buttonmargin = {
    color: 'white',
    border: '1px solid lightgrey',
    backgroundColor: "rgba(100,100,100,0.5)",
    borderRadius: '5px',
    marginLeft: '10px'
}