import React from 'react'
import './key.css'

const Key = (props) => (
    <button 
        className="key-button" 
        onClick= { () => props.onPress(props.value) } >
        { props.value }
    </button>
)

export default Key
