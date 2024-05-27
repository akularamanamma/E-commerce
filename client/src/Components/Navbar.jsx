import React from 'react'
import {Link} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";
import navbar from './Navbar.module.css';
import CounterHOC from './CounterHOC';
function Navbar({count}) {
  return (
   <nav>
    <ul>
    <li>
        <Link style={{fontSize:"30px",color:'green'}}><span style={{color:'orange'}}>COM</span>PANY</Link>
    </li>
       <li>
       <Link to='/'>Home</Link>
       </li>
       <li>
       <Link to='/about'>About</Link>
       </li>
       <li>
       <Link to='/product'>Product</Link>
       </li>
       <li>
       <Link to='/contact'>Contact</Link>
       </li>
      
    </ul>
    <div className={navbar.logos}> 
    <ul>
        <li>
            <input type="text" placeholder='search' />
        </li>
        <li >
        <span style={{color:'white',fontSize:'20px'}}>Cart:{count}<FiShoppingCart style={{color:'white',fontSize:'22px' }}/></span>
        </li>
        <li>
        <BsFacebook style={{color:'white', fontSize:'22px',}}/>  
        </li>
        <li>
        <BsTwitter style={{color:'white', fontSize:'23px'}}/>
        </li>
        <li>
        <FaAmazon style={{color:'white', fontSize:'23px'}}/>
        </li>
    </ul>
   </div>

   </nav>
  )
}

export default CounterHOC(Navbar)
 