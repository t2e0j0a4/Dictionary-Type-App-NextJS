import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../public/Navbar'

const About = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>NextJS Learnings | About US</title>
        </Head>
        <Navbar/>
        <main className={styles.main}>
            <h1 className={styles.mainHead}>
                About
            </h1>
        </main>
    </div>
  )
}

export default About