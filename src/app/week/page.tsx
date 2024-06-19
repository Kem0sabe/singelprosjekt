'use client';
import React from 'react';
import Week from '../../components/Week';
import styles from '../../styles/custom.module.css';
import Head from 'next/head';


export default function Home() {
  
  return (

    
    <div className={styles.container}>
      <Head>
        <title>Cool weekday checker</title>
      </Head>
      <main>
        <Week />
      </main>
    </div>
  );
}

