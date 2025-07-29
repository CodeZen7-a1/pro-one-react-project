import React, {useState} from 'react'
import vegiesData from '../../vegiesData'

const Vegetables = () => {
    const [vegies,setVegies]= useState(['Karela','Bhindi','Turai','Kaddu'])
    console.log(vegiesData)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Name </th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>{vegiesData.map((elmt, index)=>(<tr
            key={index}>
                <td>{index+1}</td>
                <td >{elmt.vname}</td>
                <td >{elmt.price}</td>
                <td >{elmt.quantity>0 ? (<p>Available</p>):(<p>Not Available</p>)}</td>
                <td><button  ><img src={elmt.image} alt={elmt.vname} style={{height:'60px',width:'60px'}} className='me-3'/>Buy Now</button></td>



                </tr>

            ))}
                
            </tbody>
        </table>
        <ul>
            {vegies.map((veg, index)=>(
                <li key={index}>{veg}</li>
            ))}
        </ul>
    </div>
  )
}

export default Vegetables