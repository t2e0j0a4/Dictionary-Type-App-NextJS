import Head from 'next/head'
import Navbar from '../public/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS | Learning</title>
        <meta name="description" content="Next JS Leaarning ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        <h1 className={styles.mainHead}>Next JS Learning</h1>
      </main>
    </div>
  )
}
