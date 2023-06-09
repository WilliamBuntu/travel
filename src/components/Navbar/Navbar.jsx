import React , {useState} from 'react'
import './Navbar.css';
// import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { BsGlobeAsiaAustralia} from 'react-icons/bs';
import { Link } from "react-router-dom";






const Navbar = () => {

  const [active ,setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

   const removeNav = ()=>{
    setActive('navBar ')
  }

  return (
<section className='navBarSection'>
  <header className='header flex' >
<div  className='logoDiv'>

<a  href='/' className='logo flex'>
  <h1>  <BsGlobeAsiaAustralia className = 'icon' /> Travel .</h1>
</a>
</div>


 <div className= {active}>


     <ul className='navLists flex'>
       <li className='navItem'>
         <a href='/Home' className='navLink'>Home</a>
       </li>
       <Link to="/Packages">  <li className='navItem'>
         <a className='navLink'>Packeges</a>
       </li> </Link>

       

        <li className='navItem'>
         <a href='/Shop' className='navLink'>Shop</a>
       </li>

        <li className='navItem'>
         <a href='/' className='navLink'>About</a>
       </li>

        <li className='navItem'>
         <a href='/' className='navLink'>pages</a>
       </li>

        <li className='navItem'>
         <a href='/' className='navLink'>News</a>
       </li>

        <li className='navItem'>
         <a href='/' className='navLink'>Contact</a>
       </li>

        <button className='btn'>
          <a href='/'>BOOK NOW</a>
        </button>
     </ul>

   <div onClick={removeNav} className='closeNavbar'>
     <AiFillCloseCircle className ='icon' />
   </div>





 </div>
  <div onClick={showNav} className='toggleNavbar'>
     <TbGridDots className ='icon' />
   </div>


  </header>

</section>

  )
}

export default Navbar

