import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import {useState,useEffect} from "react"
import { useDispatch } from 'react-redux'
import { setInitialValue } from '../features/valueSlice'

const ComponentA = () => {
    const dispatch=useDispatch();

    //initial value that will be accessed from everywhere.
    let count=0;


    //will set the initial value on first render
    useEffect(()=>{
        dispatch(setInitialValue(count));
    },[])

    return (
        <div>
            <ComponentC/>
            <ComponentB/>
        </div>
    )
}

export default ComponentA
