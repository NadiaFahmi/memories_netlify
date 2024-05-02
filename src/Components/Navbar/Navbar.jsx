import React ,{useState}from 'react'
import './Navbar.css'
import {assets} from '../Assets/All_image'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menu, setMenu] =useState("Home");
  return (
    <div className='navbar'>
      <div className='contact-left'>
      <h1>Memories</h1>
      <span className=''></span>
 
      </div>
           
      {/* <img src={assets.logo}alt=''/> */}
      <ul className='navbar-menu'>

        {/* <li onClick={()=>setMenu("Home")} className={menu==="Home" ?"active":""}>Home</li> */}
        <Link onClick={()=>setMenu("Home")} className={menu==="Home" ?"active":""}>Home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("About")} className={menu==="About" ?"active" :""}>Explore</a>
        <a href='#about' onClick={()=>setMenu("About")} className={menu==="About" ?"active" :""}>Special day</a>
        
      </ul>

    
    </div>
  )
}

export default Navbar
