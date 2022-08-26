import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Head from 'next/head'
import Carousel from '../components/Carousel';





export default function test2 () {
    return (
        <div>
            <Head>
                <title>Two</title>
                <meta name="description" content="" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>

           
            <Header/>


            <Carousel/>
        


        </div>
    )



}