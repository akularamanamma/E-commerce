
import React, { useEffect, useState } from 'react';
import products from './Product.module.css';
import CounterHOC from './CounterHOC';
import {useNavigate} from 'react-router-dom'
import axios  from 'axios';
function Product() {
  let[product,setproduct]=useState([])
  let navigate=useNavigate()
  let getProduct=async()=>{
    try{
        let gettingData= await axios.get("http://localhost:5000/getdata")
       setproduct(gettingData.data)
       console.log(gettingData.data);
    }
    catch(err){
      console.log(err);
    }
}
useEffect(()=>{
  getProduct()
},[])

let singleProduct=(id)=>{
 navigate(`/product/${id}`)
}
  return (
   <div className={products.products}>
    {
      product.map(({id,title,image,rating})=>{
        return <section key={id} className={products.product}>
       <h1>{title}</h1>
          <img src={image} alt="" height={300} width={300}/>
          <h2>Rate:{rating.rate}</h2>
          <h2>Count:{rating.count}</h2>
          <button onClick={()=>{singleProduct(id)}}>More Details</button>
        </section>   

      })
    }

    </div>
  )
}

export default CounterHOC(Product)



