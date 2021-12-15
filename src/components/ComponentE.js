import React from 'react'
import { useSelector } from 'react-redux'

const ComponentE = () => {
    const value=useSelector((state)=>state.valueslice.value);
    return (
        <h3>
            Value is: {value}
        </h3>
    )
}

export default ComponentE
