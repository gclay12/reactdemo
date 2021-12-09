import React from 'react'
import FooterLinks from './FooterLinks'
import FooterCopy from './FooterCopy'
import FooterSocial from './FooterSocial'

function Footer() {
    return (
        <div style={footerstyle}>
            <div style={footercenter}>
                <FooterLinks />
                <FooterCopy />
                <FooterSocial />
            </div>
        </div>
    )
}

export default Footer


const footerstyle = {
    width: '100%',
    height: '200px',
    backgroundColor:'rgba(50,50,200,0)',  
    overflow: 'hidden',
    gridColumn: '1/3',
    gridRow: '3'
}

const footercenter = {
    width: '650px',
    height: '160px',

    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hiddden'

}