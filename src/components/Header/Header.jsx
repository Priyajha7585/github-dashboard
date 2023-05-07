import React from 'react'
import styles from './Header.module.css';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {BiBell} from 'react-icons/bi'
import { signOut, useSession } from 'next-auth/react';
import Analytics from '../Analytics/Analytics';

const Header = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.divWrapper}>
            <div className={styles.search}>
                <input type='text' placeholder='Search here...'/>
                <AiOutlineSearch/>
            </div>
            <BiBell className={styles.icon}/>
            {/* <FaUserCircle className={styles.icon}/> */}
            <img src={session.data.user.image} className={styles.image} onClick={()=>signOut()}/>
          </div>
      </div>
      <Analytics/>
    </div>
  )
}

export default Header
