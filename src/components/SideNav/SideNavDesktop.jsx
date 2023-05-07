import React from 'react'
import styles from './SideNavDesktop.module.css'
import {RiPieChart2Fill} from 'react-icons/ri'
import {RiGitRepositoryFill} from 'react-icons/ri'
import {TbCalendarTime} from 'react-icons/tb'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import { signOut } from 'next-auth/react'

const SideNavDesktop = () => {
    return(
      <div className={styles.main}>
        <div className={styles.mainWrapper}>

      <h1 className={styles.title}>Board.</h1>
      <ul className={styles.list}>
        <li>
            <RiPieChart2Fill/> <p><b>Dashboard</b></p>
        </li>
        <li>
            <RiGitRepositoryFill/> Repositories
        </li>
        <li>
            <TbCalendarTime/> Activity
        </li>
        <li>
            <BiUserCircle/> Followers
        </li>
        <li>
            <AiOutlineSetting/> Settings
        </li>
      </ul>
        </div>
      <div className={styles.help}>
        <p>Help</p>
        <p>Contact Us</p>
        <button onClick={()=>signOut()}><p>Log Out</p></button>
      </div>
    </div>
    )
  
}

export default SideNavDesktop