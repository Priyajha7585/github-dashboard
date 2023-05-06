import React, { useState } from "react";
import styles from "./SideNavMobile.module.css";
import { RiPieChart2Fill } from "react-icons/ri";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const SideNavMobile = () => {
  const [show, setShow] = useState(false);
  if(show)
  {
    return(
        <div className={styles.main}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Board.</h1>
        <GiHamburgerMenu
          onClick={() => setShow(!show)}
        />
      </div>
      <div className={styles.container}>
          <ul className={styles.list}>
            <li>
              <RiPieChart2Fill /> Dashboard
            </li>
            <li>
              <BsTags /> Transactions
            </li>
            <li>
              <TbCalendarTime /> Schedules
            </li>
            <li>
              <BiUserCircle /> Users
            </li>
            <li>
              <AiOutlineSetting /> Settings
            </li>
          </ul>

          <div className={styles.help}>
            <p>Help</p>
            <p>Contact Us</p>
          </div>
        </div>
    </div>
    )
  }
  return(
    <div className={styles.mainNotShow}>
      <div className={styles.titleWrapperNotShow}>
        <h1 className={styles.title}>Board.</h1>
        <GiHamburgerMenu
          onClick={() => setShow(!show)}
        />
      </div></div>
  )
};

export default SideNavMobile;
