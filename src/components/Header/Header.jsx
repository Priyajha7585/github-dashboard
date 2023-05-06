import React from 'react'
import styles from './Header.module.css';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {BiBell} from 'react-icons/bi'
import { signOut } from 'next-auth/react';
import Analytics from '../Analytics/Analytics';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <h4 className={styles.title}>Dashboard</h4>
          <div className={styles.divWrapper}>
            <div className={styles.search}>
                <input type='text' placeholder='Search here...'/>
                <AiOutlineSearch/>
            </div>
            <BiBell/>
            <FaUserCircle onClick={()=>signOut()}/>
          </div>
      </div>
      {/* <Analytics/> */}
    </div>
  )
}

export default Header
