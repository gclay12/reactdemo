import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Project2 from '../projects/Project2'
import Image1 from '../../images/istockphoto-1166511133-612x612-2.jpg'

function Page4() {
    return (
        <div style={outwrapper}>
            <div style={wrapper}>  
                <Navbar />
                <div style={content}>
                     <div style={aboutdiv} >
                       <h1>About</h1>
                       <p>This website is to demonstrate my understand of the basics of react.  Especialy react state and props and how they interact.  These examples are simple but demonstrate that I understand at least the basics of react.</p>
                    </div>
                </div>
       
            </div>
            <div style={background}>
                <img src={Image1} width="1280"></img>
            </div>
        </div>
    )
}

export default Page4

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



const aboutdiv = {
    color: 'white',
    width: '400px',
    height: '500px',

    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '70px'
}