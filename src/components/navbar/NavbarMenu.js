import React from 'react'
import { Link } from 'react-router-dom';

function NavbarMenu() {
    return (
        <div style={navstyl2}>
        <li style={navstyle}><Link to="/" style={navstylecolor}>Example 1</Link></li>
        <li style={navstyle }><Link to="/page2" style={navstylecolor}>Example 2</Link></li>
        <li style={navstyle}><Link to="/page3" style={navstylecolor}>Example 3</Link></li>
        <li style={navstyle}><Link to="/page4" style={navstylecolor}>About</Link></li>
        </div>
    )
}

export default NavbarMenu




const navstyle = {
    color: 'white',
    marginTop: "20px", 
    marginLeft: '50px',
    display: 'inline-block'
}

const navstyl2 = {
    color: 'white',
    width: '520px',
    height: '70px',
    
    position: 'absolute',
    right: '0'
}


const navstylecolor = {
    color: 'white'
}