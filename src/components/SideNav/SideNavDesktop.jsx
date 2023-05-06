import React from 'react'
import styles from './SideNavDesktop.module.css'
import {RiPieChart2Fill} from 'react-icons/ri'
import {BsTags} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'

const SideNavDesktop = () => {
    return(
      <div className={styles.main}>
        <div className={styles.mainWrapper}>

      <h1 className={styles.title}>Board.</h1>
      <ul className={styles.list}>
        <li>
            <RiPieChart2Fill/> <p>Dashboard</p>
        </li>
        <li>
            <BsTags/> Transactions
        </li>
        <li>
            <TbCalendarTime/> Schedules
        </li>
        <li>
            <BiUserCircle/> Users
        </li>
        <li>
            <AiOutlineSetting/> Settings
        </li>
      </ul>
        </div>
      <div className={styles.help}>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
    )
  
}

export default SideNavDesktop