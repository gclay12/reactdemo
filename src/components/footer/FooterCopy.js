import React from 'react'

function FooterCopy() {
    return (
        <div style={footercopystyle}>
            <h2>Copywrite of</h2>
            <h1>Gabe Clay</h1>
        </div>
    )
}

export default FooterCopy

const footercopystyle = {
    color: 'white',
    width: '200px',
    height: '160px',
    border: '1px solid yellow',
    display: 'inline-block',
    margineLeft: '10px',
    marginRight: '10px',
    overflow: 'hidden',
    textAlign: 'center'
}