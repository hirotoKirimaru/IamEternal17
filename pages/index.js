import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [birth, setBirth] = useState(new Date(2000,0,1));
  const [baseYear, setBaseYear] = useState(17);

  const inputBaseYear = (e) => {
    setBaseYear(e.target.value);
  }

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
          私は永遠の{baseYear}歳
        </h1>

        <p className={styles.description}>
        <p>基準年齢：<input type="number" value={baseYear}
        onChange={inputBaseYear}/>
        </p>
        <p>生年月日：<input type="date" name="date" 
        value={getInputString(birth)}
        onChange={inputBirth}/></p>
          {createBirthDom(baseYear, birth)}
        </p>
      </main>

      <footer className={styles.footer}>
    
        <a
          href="https://twitter.com/nainaistar"
          target="_blank"
          rel="noopener noreferrer"
        >
          連絡先：きり丸
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>

      　　　　　　　
     
        <a 
          href="https://github.com/hirotoKirimaru/IamEternal17"
          target="_blank"
          rel="noopener noreferrer"
        >
          ソースコード
          
        </a>
      
      </footer>
    </div>
  )
}

function createBirthDom(baseYear, birth){
  const now = new Date();
  // const birth = new Date(1992,1,4);

  return <>
  <p>現在時刻：{getNowDateWithString(now)}</p>
  <p>年齢：{birthDayCompute(baseYear, now, birth)}</p>
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

function birthDayCompute(baseYear, now ,birth){

  let year = now.getYear() - birth.getYear();
  let month = now.getMonth() - birth.getMonth();
  const day = now.getDate() - birth.getDate();

  if (day < 0) {
    month--;
  }

  month += ((year - baseYear) * 12);
  year = baseYear;

  return year+"歳"+month+"ヵ月";
}