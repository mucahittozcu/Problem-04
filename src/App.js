import Image from 'next/image'
import React, { useState } from 'react'

// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false)

  const handleLogin = () => {
    setIsAuthUser(true)
  }

  const handleLogout = () => {
    setIsAuthUser(false)
  }

  return (
    <div className=''>
      <link href="path/to/tailwind.css" rel="stylesheet"></link>
      <header className='navbar-wrapper'>
        <nav className=' text-center '>
      <div className="flex justify-center">
            </div>
          {isAuthUser ? (
            <>
              <div className='flex  flex-col items-center  space-y-2.5'>
            <Logo />
              <h1 className="text-center text-2xl font-bold ">Hoş geldiniz</h1>

                <a href='#' className=' bg-blue-700 text-white font-medium w-64 text-center h-16 flex items-center justify-center rounded-lg'>
                  Dashboard
                </a>
                <a href='#' onClick={handleLogout} className='bg-blue-700 text-white font-medium w-64 text-center h-16 flex items-center justify-center rounded-lg'>
                  Çıkış Yap
                </a>
              </div>
            </>
          ) : (
            <div className='flex flex-col items-center space-y-4'>
              <Logo />
            <h1 className="text-2xl font-bold text-center">Hesabınıza giriş yapın</h1>
            <div className='flex justify-center  space-x-8 space-x-reverse '>
              <a href='#' onClick={handleLogin} className='bg-blue-700 text-white font-medium w-64 text-center h-16 flex items-center justify-center rounded-lg'>
                Giriş Yap
              </a>
            </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}


function Logo() {
  return (
    <>
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5 '>
        <Image
         
          className='h-8 w-auto'
          src='/mark.svg'
          alt='Tailwind Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
    </>
  )
}


  //   const isAuthUser = false
  //   const [auther,setAuther]= useState(isAuthUser)
  //   return (
  //     <>
  //     <link href="path/to/tailwind.css" rel="stylesheet"></link>
  //     <Logo />
  //     {auther &&  (
  //       <>
    
  //       <header className='navbar-wrapper'>
  //       <nav className='navbar text-center '>
  //           <h1 className="text-2xl font-bold">Hesabınıza giriş yapın</h1>
  //         <div className='flex items-center space-x-4 space-y-1.5 > * + *'>
  //         <a href='#' onClick={() => setAuther((pre) => !pre) } className='bg-blue-700 text-white font-medium w-64 text-center h-16 rounded-lg'>
  //            Login
  //           </a>
  //           <a href='#' onClick={() => setAuther((pre) => !pre) }  className='bg-blue-700 text-white font-medium w-64  text-center h-16 rounded-lg'>
  //            Dashboard
  //           </a>
  //           <a href='#' onClick={() => setAuther((pre) => !pre) }   className='bg-blue-700 text-white font-medium w-64  text-center h-16 rounded-lg'>
  //             Sign out
  //           </a>
  //         </div>
  //       </nav>
  //     </header>
      
  //     </>
  //     )}
  //     </>
  //   )
  // }
  