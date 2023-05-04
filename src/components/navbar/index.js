import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <h1 className={style.header}>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={style.list}>
        <li>
            <Link href='/'>
                Home
            </Link>
        </li>
        <li>
            <Link href='/dashboard'>
                Dashboard
            </Link>
        </li>
        <li>
            <Link href='#'>
                SingIn
            </Link>
        </li>
        <li>
            <Link href='#'>
                SignOut
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
