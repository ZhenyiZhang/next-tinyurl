import Head from 'next/head';
import Generator from '../components/generator/generator';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Short Url Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>Short Url Generator</h1>
          <Generator/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
