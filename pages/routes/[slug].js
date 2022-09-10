import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../public/Navbar';
import styles from '../../styles/Home.module.css';

const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (

    <div className={styles.container}>
        <Head>
            <title>{`Next JS Learnings | ${slug}`}</title>
        </Head>
        <Navbar/>
        <main className={styles.main}>
            <h1 className={styles.mainHead} >{slug}</h1>
        </main>
    </div>    
  )
}

export default Slug;