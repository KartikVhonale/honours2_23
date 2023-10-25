import React from 'react'
import styles from './About.module.css'
import './About.css'
const About = () => {
  return (
    <>
    <div className={`${styles.primary} ${styles.font1}`}>
         This is About.module.css
    </div>
    <div className='primary font1'>
         This is the About.css
    </div>
    </>
  )
}

export default About