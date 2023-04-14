import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';

const API_URL = 'https://api.get-health.webmedbr.com/go_webmed';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>E o vencedor é</main>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
