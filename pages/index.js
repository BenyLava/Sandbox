import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import Link from 'next/link';
import Header from '../components/Header';


export default function Home() {
  return (
    


    <div className={styles.container}>
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Header/>



      <main className={styles.main}>
        

        <Image src="/images/hackerman.png" width={420} height={420} alt="hackerman" className="img-radius" />

        <div className={styles.grid}>

        <div className={styles.card}>
          <Link href="/test1" passHref className={styles.card}>
            <a className="stretched-link">1</a>
          </Link>
          </div>
          

          <div className={styles.card}>
          <Link href="/test2" passHref className={styles.card}>
            <a className="stretched-link">2</a>
          </Link>
          </div>

          <div className={styles.card}>
          <Link href="/test3" passHref className={styles.card}>
            <a className="stretched-link">3</a>
          </Link>
          </div>

          <div className={styles.card}>
          <Link href="/test4" passHref className={styles.card}>
            <a className="stretched-link">4</a>
          </Link>
          </div>

        </div>
      </main>

      <Footer className="footer"/>
    </div>
  )
}
