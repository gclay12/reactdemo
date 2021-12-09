import React from 'react'
import Navbar from '../navbar/Navbar'
import Project3 from '../projects/Project3'
import Content1 from '../content/Content1'
import Footer from '../footer/Footer'
import Image1 from '../../images/istockphoto-1166511133-612x612-2.jpg'

function Page3() {
    return (
        <div style={outwrapper}>
            <div style={wrapper}>  
                <Navbar />
                <Project3 />
            </div>
            <div style={background}>
                <img src={Image1} width="1280"></img>
            </div>
        </div>
    )
}

export default Page3

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