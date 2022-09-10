import Head from 'next/head'
import React from 'react'
import Navbar from '../public/Navbar'
import styles from '../styles/Home.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Next JS Leaarning | Contact</title>
        </Head>

        <Navbar/>

        <main className={styles.main}>
            <h1 className={styles.mainHead}>Contact</h1>
        </main>
    </div>
  )
}

export default Contact