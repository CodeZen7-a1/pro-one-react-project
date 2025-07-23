
import React, { useState } from 'react'

const ChangeHeading = () => {
  const [heading, setheading] = useState('Learned HTML CSS JAVASCRIPT')
  function handleChangeHeading() {
    setheading("Now learning ReactJS")
  }
  return (
    <>
      <div className="container p-5 border border-2 border-black bg-light" style={{boxShadow:"3px 3px 3px black, 7px 7px 7px lightgray"}}>
        <div >
          <h1>{heading}</h1>
          <button onClick={handleChangeHeading} className='mt-4'>Change Heading</button>
        </div>
      </div>
    </>
  )
}
export default ChangeHeading

