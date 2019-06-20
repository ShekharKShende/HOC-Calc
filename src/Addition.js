import React from 'react'
import WithCalc from './withCalc'
const Addition = ({doOperation, result}) => {
return <h1 onClick={doOperation} >The addition is {result}</h1>
}

export default WithCalc(Addition, 'add')