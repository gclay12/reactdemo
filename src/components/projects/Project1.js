import React, {useState} from 'react'

function Component1() {
    
    const [style1, setStyle1] = useState('divgrey');

    function stylegreyhandler() {
        setStyle1("divgrey");
    }

    function stylebluehandler() {
        setStyle1("divblue");
    }
    
    function stylegreenhandler() {
        setStyle1("divgreen");
    }

    function stylegredhandler() {
        setStyle1("divred");
    }

    function stylepurplehandler() {
        setStyle1("divpurple");
    }

    function styleyellowhandler() {
        setStyle1("divyellow");
    }
 
    
    return (
        <div className={style1} id="div1">
            <h1 style={h1style}>Dynamic Styling</h1>
            <p>With State in React</p>
            <button style={buttonstyle0} onClick={stylegreyhandler}>Grey</button>
            <button style={buttonstyle1} onClick={stylebluehandler}>Blue</button>
            <button style={buttonstyle2} onClick={stylegreenhandler}>Green</button>
            <button style={buttonstyle3} onClick={stylegredhandler}>Red</button>
            <button style={buttonstyle4} onClick={stylepurplehandler}>Purple</button>
            <button style={buttonstyle5} onClick={styleyellowhandler}>Yellow</button>
        </div>
    )
}

export default Component1


const h1style = {
    marginBottom: '0px'
}

const buttonstyle0 = {
    color: 'white',
    backgroundColor: 'grey',
    border: '1px solid lightgrey'
}

const buttonstyle1 = {
    color: 'white',
    backgroundColor: 'blue',
    border: '1px solid lightblue'
}

const buttonstyle2 = {
    color: 'white',
    backgroundColor: 'green',
    border: '1px solid lightgreen'
}

const buttonstyle3 = {
    color: 'white',
    backgroundColor: 'red',
    border: '1px solid lightred'
}

const buttonstyle4 = {
    color: 'white',
    backgroundColor: 'purple',
    border: '1px solid lightpurple'
}

const buttonstyle5 = {
    color: 'white',
    backgroundColor: 'yellow',
    border: '1px solid lightyellow'
}