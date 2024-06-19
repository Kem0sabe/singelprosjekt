'use client';
import React from 'react';
import SimpleCard, {SimpleCardProps} from '../components/cards/SimpleCard';
import ImageCard, {ImageCardProps} from '../components/cards/ImageCard';
import Week from '../components/Week';
import styles from '../styles/custom.module.css';
import Head from 'next/head';
const myCardAttributes : SimpleCardProps= {
  title: 'Static Card',
  text: 'This is static content',
};

  
const myImageCardAttributes : ImageCardProps = {
  title: 'Static Image Card',
  text: 'This is just a static card with an image from the internet',
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
        <br></br>
        <ImageCard {...myImageCardAttributes}/>
      </main>


      
    </div>
  );
}

