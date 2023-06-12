'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { styles } from '../styles'
import { navLinks } from '../constants'
// import { logo, menu, close } from '/assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  function onClickLogo(){
    setActive('')
    window.scrollTo(0, 0)
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5
     fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between item-center
      max-w-7xl mx-auto'>
        <Link 
          href='/'
          className='flex items-center gap-2'
          onClick={onClickLogo}>
          <img src='assets/logo.svg' alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Idan &nbsp;
            <span className='sm:block hidden'> | Full Stack Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-white' : 'text-secondary'}
                hover:text-white text-[18x] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle ? 'assets/close.svg' : 'assets/menu.svg'}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'  
          onClick={() => setToggle(!toggle)}/>
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute 
        top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-white' : 'text-secondary'}
                font-poppins font-medium text-[16px] cursor-pointer`}
                onClick={() => {
                  setToggle(false)
                  setActive(link.title)
                  }}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar