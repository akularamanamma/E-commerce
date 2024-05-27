import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import './SingleProduct.css'

function SingleProduct() {
  let[sproduct,setsproducts]=useState({})
  let{id}= useParams()
  let SingleProduct=async()=>{
      let data=await axios.get(`http://localhost:5000/getdata/${id}`)
      console.log(data.data);
      setsproducts(data.data)
  }
 
  useEffect(()=>{
    SingleProduct()
  },[id])
  return (
    <div className='SingleProduct'>
      <h2>{sproduct.title}</h2>
        <img src={sproduct.image} alt="" height={300} width={300}/>
        <h2>Category:{sproduct.category}</h2>
        <h2>Price:${sproduct.price}</h2>
      <h2>Description:{sproduct.description}</h2>
     </div>
  )
}

export default SingleProduct