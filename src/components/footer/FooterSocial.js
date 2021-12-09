import React from 'react'
import Facebook from '../../images/index.png'
import Twitter from '../../images/twittersized.jpg'
import Youtube from '../../images/2000px-YouTube_social_white_square_2017.svg_-1-1024x778.png'

function FooterSocial() {
    return (
        <div style={footersocialstyle}>
            <h2>social media</h2>
            <img style={imagestyle} src={Facebook} width="40"></img>
            <img style={imagestyle} src={Twitter} width="50"></img>
            <img style={imagestyle}  src={Youtube} width="50"></img>
        </div>
    )
}

export default FooterSocial


const footersocialstyle = {
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

const imagestyle = {
    marginLeft: '10px',
    marginRight: '10px' 
}