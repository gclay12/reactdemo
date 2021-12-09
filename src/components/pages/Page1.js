import React from 'react'
import Navbar from '../navbar/Navbar'
import Content2 from '../content/Content2'
import Footer from '../footer/Footer'
import Project1 from '../projects/Project1'
import Image1 from '../../images/istockphoto-1166511133-612x612-2.jpg'

function Page1() {
    return (
        <div style={outwrapper}>
            <div style={wrapper}>  
                <Navbar />
                <div style={content}>
                    <Project1 />
                </div>
          
            </div>
            <div style={background}>
                <img src={Image1} width="1280"></img>
            </div>
        </div>
    )
}

export default Page1

const outwrapper = {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange'
}

const wrapper = {
    width: '100%',
    height: '500px',
    
    position: 'absolute',
    top: '0',
    zIndex: '5',

}

const background = {
    width: '100%',
    height: '595px',
    backgroundColor: 'teal',
    position: 'absolute',
    top: '0',
    overflow: 'hidden'
}


const content = {
    width: '100%',
    height: '500px',
    overflow: 'hidden'
}