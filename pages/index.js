import Head from 'next/head'
import React , {useState} from 'react'
import styles from '../styles/Home.module.css'
import {BsSearch} from 'react-icons/bs'
import axios from 'axios'
import Loading from '../Components/Loading'

export default function Home() {
  const [word , setWord] = React.useState('')
  const [data,setData] = React.useState([])
  const [meanings, setMeanings] = useState([])
  const [definitions, setDefinitions] = useState([])
  const [loading, setLoading] = useState(false)
  const changeWord = (e) => {
    setWord(e.target.value)
  }
  
  const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word === '' ? 'default' : word}`  
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API);
      setData(response.data[0]);
      setMeanings(response.data[0].meanings[0]);
      setDefinitions(response.data[0].meanings[0].definitions[0]);
      setLoading(false);
    }
    catch (err) {
      window.alert("No Proper Word Found")
    }
  }


  
  React.useEffect(() => {
      
      fetchData();
    // eslint-disable-next-line
  },[])

  const searchDictionary = () => {
    if (word !== ''){
      fetchData();
    }
    else {
      window.alert("Enter Word to Search Related !!!")
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Dictionary | Home</title>
        <meta name="description" content="Next JS Leaarning ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.dictionary}>
        <div className={styles.searchbar}>
          <input type="text" name="wordsearch" id="searchbar" value={word} onChange={changeWord} placeholder="Search Words ..."/>
          <BsSearch className={styles.searchicon} onClick={()=>{searchDictionary()}}/>
        </div>
        
        {loading ? <Loading/> :  <section className={styles.results}>
          <div className={styles.dictDetails}>
            <p>{meanings.partOfSpeech ? meanings.partOfSpeech : '-'}</p>
            <p>{data.phonetic ? data.phonetic : '-'}</p>
          </div>
          <h1 className={styles.title}> <span className={styles.span}>Word</span> : {data.word ? data.word : "-"}</h1>
          <div className={styles.meanings}>
            <p> <span className={styles.span}>Meaning</span> : {definitions.definition ? definitions.definition : '-'}</p>
            <p> <span className={styles.span}>Example</span> : {definitions.example ? definitions.example : '-'}</p>
          </div>
        </section>}
      </main>
    </React.Fragment>
  )
}
