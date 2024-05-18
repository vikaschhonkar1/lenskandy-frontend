import React from 'react'
import styles from './LineProgress.module.css'

const LineProgress = ({ className } : any) => {
  return (
    <div className={`${className} ${styles["loader-line"]}`}></div>
  )
}

export default LineProgress