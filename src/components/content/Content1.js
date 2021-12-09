import React from 'react'
import Project1 from '../projects/Project1'

function Content1() {
    return (
        <div style={contentstyle}> 
            <Project1 />
        </div>
    )
}

export default Content1


const contentstyle = {
    width: '100%',
    height: '500px',
    backgroundColor: 'teal',
    overflow: 'hidden'
}