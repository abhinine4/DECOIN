import React, { useState } from 'react'
import Button from '../Element/button';

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"HOW IT WORKS",link:"/"},
      {name:"ABOUT US",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [navbar,setNavbar]=useState(true);
    let [open,setOpen]=useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 80) {
        console.log("navbar",navbar);
        console.log("set navbar",window.scrollY);
        setNavbar(false);
      } else {
        console.log("navbar",navbar);
        console.log("unset  navbar",window.scrollY);
        setNavbar(true);
      }
    };

    window.addEventListener("scroll", changeBackground);

  return (
    <div className=' w-full fixed top-0 left-0 z-50'>
      <div className={`md:flex items-center justify-between  py-4 md:px-10 px-7 ${navbar ? 'bg-transparent':'	backdrop-blur-md bg-white/30 shadow-md  duration-500 '} `}>
      <div className='font-bold text-4xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        DeCOIN
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center justify-items-start md:pb-0 pb-12 absolute md:static  bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 bg-zinc-100 ':'top-[-490px] '} `}>
         {        
          Links.map((link)=>(
            <li key={link.name} className={`md:ml-8 text-2xl md:my-0 my-7 md:text-white  ${open?'hover:py-2 px-6 rounded hover:bg-indigo-400' :'top-[-490px] '}`}>
              <a href={link.link} className='text-white duration-500'>{link.name}</a>
            </li>
          ))
        }
       <div className=' md:flex md:justify-end'>
        <Button>
          Login
        </Button>
        <Button >
          Register
        </Button>
        </div>
      
      </ul>
    
      </div>
    </div>
  )
}

export default Navbar