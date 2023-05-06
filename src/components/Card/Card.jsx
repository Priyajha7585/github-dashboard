import React from 'react'
import styles from './Card.module.css'

const Card = ({title,value,component, color}) => {
  return (
    <div className={styles.main} style={{backgroundColor:color}}>
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
