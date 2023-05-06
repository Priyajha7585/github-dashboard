import React from 'react'
import {GrCurrency} from 'react-icons/gr'
import styles from './Card.module.css'

const Card = ({title,value,component}) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperOne}>
        <p>{title}</p>
        <h4>{value}</h4>
      </div>
      <div className={styles.wrapperTwo}>
        {component}
      </div>
    </div>
  )
}

export default Card
