import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navitems}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar