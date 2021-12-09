import React from 'react'
import Project2 from '../projects/Project1'

function Content2() {
    return (
        <div style={contentstyle}> 
            <Project2 />
        </div>
    )
}

export default Content2


const contentstyle = {
    width: '100%',
    height: '500px',
    backgroundColor: 'teal',
    overflow: 'hidden'
}