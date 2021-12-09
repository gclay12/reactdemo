import React from 'react'
import { Link } from 'react-router-dom';

function FooterLinks() {
    return (
        <div style={footerlinksstyle}>
        <ul>
        <li style={linkstyle}><Link style={link1} to="/">Home</Link></li>
        <li style={linkstyle}><Link style={link1} to="/page2">Page 2</Link></li>
        <li style={linkstyle}><Link style={link1} to="/page3">Page 3</Link></li>
        <li style={linkstyle}><Link style={link1} to="/page4">Page 4</Link></li>
        </ul>
        </div>
    )
}

export default FooterLinks


const footerlinksstyle = {
    width: '200px',
    height: '160px',
    border: '1px solid yellow',
    display: 'inline-block',
    margineLeft: '10px',
    marginRight: '10px',
    overflow: 'hidden'
}

const linkstyle = {
    marginTop: '3px', 
    display: 'block'
}

const link1 = {
    color: 'white'
}