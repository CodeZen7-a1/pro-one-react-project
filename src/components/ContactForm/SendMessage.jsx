import React from 'react'

const SendMessage = ({ inputType }) => {
    return (
        <div>
            <input type={inputType} value='Send Message' style={{width:'20%'}} className='bg-success' />

        </div>
    )
}

export default SendMessage