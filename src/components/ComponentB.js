import React from 'react';
import "../App.css";
import { useDispatch } from 'react-redux';
import { addValue } from '../features/valueSlice';

const ComponentB = () => {
    const dispatch=useDispatch();

    const handleChange=()=>{
        dispatch(addValue(1));
    }
    return (
        <button className="button" onClick={handleChange}>
            button
        </button>
    )
}

export default ComponentB
