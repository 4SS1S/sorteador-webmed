import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const API_URL = 'https://api.get-health.webmedbr.com/go_webmed';

export default function Home(data) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    startTime(3);
  }, []);

  const startTime = (t) => {
    setCount(t);

    if (t < -3) return;

    setTimeout(() => {
      startTime(t - 1);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        {count > 0 ? (
          <div>{count}</div>
        ) : (
          <div>{count > -3 ? <>O Vencedor é</> : <>{data.nome}</>}</div>
        )}
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(API_URL).then((res) => res.json());

  return {
    props: data,
  };
};
