import Image from 'next/image'
import React, { useState } from 'react'

// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const isAuthUser = false
  const [auther,setAuther]= useState(isAuthUser)
  return (
    <React.Fragment>
      <Logo setAuther={setAuther} />
    {auther && 
      <header className='navbar-wrapper'>
      <nav className='navbar'>
        <div className='navbar-links'>
          <a href='#' className='navbar-link'>
           Dashboard
          </a>
          <a href='#'  className='navbar-link'>
            Sign out
          </a>
        </div>
      </nav>
    </header>
      }
    
    </React.Fragment>
  )
}

function Logo({setAuther}) {
  return (
    <React.Fragment>
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5'>
        <Image
          onClick={() => setAuther((pre) =>!pre)}
          className='h-8 w-auto'
          src='/mark.svg'
          alt='Tailwind Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
    </React.Fragment>
  )
}
