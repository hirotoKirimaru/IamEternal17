import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [birth, setBirth] = useState(new Date(2000,0,1));
  const inputBirth = (e) => {
    setBirth(new Date(e.target.value));
  }
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          私は永遠の17歳
        </h1>

        <p className={styles.description}>
        <label>生年月日：<input type="date" name="date" 
        value={getInputString(birth)}
        onChange={inputBirth}/></label>
        {/* <p>生年月日：<input type="date"></input></p> */}
          {createBirthDom(birth)}

          {/* Get started by editing{' '} */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{''}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  )
}

function createBirthDom(birth){
  const now = new Date();
  // const birth = new Date(1992,1,4);

  return <>
  <p>現在時刻：{getNowDateWithString(now)}</p>
  <p>年齢：{birthDayCompute(now, birth)}</p>
  </>
}


function getNowDateWithString(dt){
var y = dt.getFullYear();
var m = ("00" + (dt.getMonth()+1)).slice(-2);
var d = ("00" + dt.getDate()).slice(-2);
var result = y + "/" + m + "/" + d;
return result;
}

function getInputString(dt){
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth()+1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  var result = y + "-" + m + "-" + d;
  return result;
}

function birthDayCompute(now ,birth){

  let year = now.getYear() - birth.getYear();
  let month = now.getMonth() - birth.getMonth();
  const day = now.getDate() - birth.getDate();

  if (day < 0) {
    month--;
  }

  month += ((year - 17) * 12);
  year = 17;

  return year+"歳"+month+"ヵ月";
}