import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
        function addition() {
            setResult(Number(n1) + Number(n2))
        }
        function substraction() {
            setResult(Number(n1) - Number(n2))
        }
        function multiply() {
            setResult(Number(n1) * Number(n2))
        }
        function division() {
            if(n2==0){
                setResult("can't divide by zero")
            }
            setResult(Number(n1) / Number(n2))
        }

    
    return (
        <>
        <div className="container p-5 border border-2 border-black bg-light mt-5" style={{boxShadow:"3px 3px 3px black, 7px 7px 7px lightgray"}}>
            <h1 className='mb-5'>Calculator</h1>
            <input type='number' onChange={(e)=> setN1(e.target.value)} style={{height:'40px'}} className='mx-2 '/>
            <input type='number' onChange={(e)=> setN2(e.target.value)} style={{height:'40px'}} className='mx-2'/>
            <div style={{height:'60px', fontSize:'28px'}}>{result}</div>
            <button onClick={addition} className='p-3 px-4 mx-2'>+</button>
            <button onClick={substraction} className='p-3 px-4 mx-2'>-</button>
            <button onClick={division} className='p-3 px-4 mx-2'>/</button>
            <button onClick={multiply} className='p-3 px-4 mx-2'>*</button>
        </div>
        </>
    )
}
export default Calculator
