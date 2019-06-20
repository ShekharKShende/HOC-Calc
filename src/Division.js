import React from 'react'
import WithCalc from './withCalc'

const Division = ({doOperation, result}) => {
    return <h1 onClick={doOperation} >The Division is {result}</h1>
}

export default WithCalc(Division, 'div')