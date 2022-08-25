import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Head from 'next/head'





export default function test1 () {
    return (
        <div className={styles.container}>
            <Head>
                <title>One</title>
                <meta name="description" content="" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>

           
            <Header/>


            
        


        </div>
    )



}