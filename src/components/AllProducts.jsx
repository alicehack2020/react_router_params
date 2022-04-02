import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {

const [data,setData]=useState()

    useEffect(()=>{
        fetch("http://localhost:3004/p_data")
        .then((res)=>res.json())
        .then((res)=>setData(res))
     },[])


  return (
    <div>
    <table>
        <thead>
            <td>id</td>
            <td>name</td>
            <td>price</td>
        </thead>
        <tbody>
           
               {
                data.map((ele)=>{
                    return(
                    <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.price}</td>
                    <td>
                     <Link to={`/Product_list/${ele.id}`}>More Details</Link>
                    </td>
                    </tr>
                    
                    
                    )
                })
               } 
           
        </tbody>
    </table>

    </div>
  )
}

export default AllProducts