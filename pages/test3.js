import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Head from 'next/head'
import ButtonBadge from '../components/ButtonBadge';





export default function test3 () {
    return (
        <div>
            <Head>
                <title>Three</title>
                <meta name="description" content="" />
                <link rel="icon" href="/images/favicon.png" />
            </Head>

           
            <Header/>


            <div className=" d-flex justify-content-center mt-5">
            <ButtonBadge/>
            </div>
        


        </div>
    )



}