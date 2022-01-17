import React from 'react'

function Backdrop(props) {
    return (
        <div style={{
            backgroundColor:"rgba(0,0,0,0.2)",
        }} onClick={props.onClick}>
            
        </div>
    )
}

export default Backdrop
