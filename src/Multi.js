import React from 'react'
import WithCalc from './withCalc'

const Multi = ({doOperation, result}) => {
    return <h1 onClick={doOperation} >The Multiplication is {result}</h1>
}

export default WithCalc(Multi, 'mul')