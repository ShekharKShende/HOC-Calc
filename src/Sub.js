import React from 'react'
import WithCalc from './withCalc'
const Sub = ({doOperation, result}) => {
return <h1 onClick={doOperation} >The substraction is {result}</h1>
}

export default WithCalc(Sub, 'sub')