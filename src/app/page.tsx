'use client';
import React from 'react';
import SimpleCard, {SimpleCardProps} from '../components/cards/SimpleCard';
import ImageCard, {ImageCardProps} from '../components/cards/ImageCard';
import Week from '../components/Week';
import styles from '../styles/custom.module.css';
import Head from 'next/head';
const myCardAttributes : SimpleCardProps= {
  title: 'My Card Title',
  text: 'This is the content',
};

  
const myImageCardAttributes : ImageCardProps = {
  title: 'My Image Card',
  text: 'This is the content',
  imageSrc: 'https://picsum.photos/300/200',

};


export default function Home() {
  
  return (

    
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Testidi test test
        </h1>
        <SimpleCard {...myCardAttributes}/>
        
        <Week></Week>

      </main>


      
    </div>
  );
}

