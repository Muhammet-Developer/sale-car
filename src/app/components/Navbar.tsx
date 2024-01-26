import Link from 'next/link'
import React from 'react'
import navbar from '@/styles/navbar.module.scss'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={navbar['navbar-container']}>
      <nav className={navbar['navigation-menu']}>
        <Link href='/'>
          <Image src='/salecar-logo.svg' width={80} height={80} alt='salecar' />
        </Link>
         <Link href='/addCar' className={navbar['navigation-button']}>Yeni İlan Ekle</Link>
      </nav>
    </div>
  )
}

export default Navbar
