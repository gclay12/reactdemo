import React from 'react'
import  NavbarMenu from "./NavbarMenu"

function Navbar() {
    return (
        <div style={navbarstyle}>
            <NavbarMenu />
        </div>
    )
}

export default Navbar


const navbarstyle = {
    width: '100%',
    height: '70px',
    backgroundColor:'rgba(50,50,200,0)',
    gridColumn: '1/3',
    gridRow: '1'

}