import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies List SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {movies.results.map((movie) => (
        <li key={movie.id}><Link href={`/movie/${movie.id}`}>{movie.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}
export const getStaticProps = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d416af5d4faee64e25ab001d87aab5c3');
  const movies = await response.json();

  return{
    props: {
      movies
    }
  }
}